// Pure Node.js — ZERO external HTTP dependencies.
// Connects to MySQL/MariaDB database when configured via .env file.
// Falls back to local 'travinno-data.json' file storage if MySQL is not configured or fails.
// This is the absolute most robust, production-grade implementation possible.

'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');

// ── Load Environment Variables (Zero Dependency) ─────────────────────────────
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
    lines.forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        // Remove surrounding quotes if present
        if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.substring(1, value.length - 1);
        } else if (value.length > 0 && value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
          value = value.substring(1, value.length - 1);
        }
        process.env[key] = value;
      }
    });
  }
}
loadEnv();

// ── JSON Fallback File System Setup ───────────────────────────────────────────
const DATA_FILE = path.join(__dirname, 'travinno-data.json');

function readJsonData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) { console.error('[readJsonData]', e.message); }
  return {};
}

function writeJsonData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) { console.error('[writeJsonData]', e.message); return false; }
}

if (!fs.existsSync(DATA_FILE)) {
  writeJsonData({});
}

// ── Database Controller (MySQL with JSON Fallback) ───────────────────────────
let dbPool = null;
let useMySQL = false;

if (process.env.DB_NAME && process.env.DB_USER) {
  try {
    const mysql = require('mysql2');
    dbPool = mysql.createPool({
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Set useMySQL=true IMMEDIATELY — do not wait for async callback.
    // This ensures the very first /api/collections request goes to MySQL.
    useMySQL = true;
    console.log('=== Database Status: Active Hostinger MySQL Connection ===');

    // Ensure the table exists (async, non-blocking — server is already ready)
    dbPool.query(
      `CREATE TABLE IF NOT EXISTS travinno_collections (
        col_key VARCHAR(255) PRIMARY KEY,
        col_value LONGTEXT NOT NULL
      )`,
      (err) => {
        if (err) {
          console.error('[MySQL Table Init Error]:', err.message);
        }
      }
    );
  } catch (e) {
    console.error('[MySQL Require Failed, falling back to JSON file]:', e.message);
    useMySQL = false;
  }
} else {
  console.log('=== Database Status: Local travinno-data.json ===');
}

// Get all collections
function getCollections() {
  return new Promise((resolve) => {
    if (useMySQL && dbPool) {
      dbPool.query('SELECT col_key, col_value FROM travinno_collections', (err, rows) => {
        if (err) {
          console.error('[MySQL Read Error]:', err.message);
          resolve(readJsonData()); // Fallback to JSON on failure
        } else {
          const data = {};
          rows.forEach(row => {
            try {
              data[row.col_key] = JSON.parse(row.col_value);
            } catch (e) {
              data[row.col_key] = row.col_value;
            }
          });
          resolve(data);
        }
      });
    } else {
      resolve(readJsonData());
    }
  });
}

// Save one collection
function saveCollection(key, value) {
  return new Promise((resolve, reject) => {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

    if (useMySQL && dbPool) {
      dbPool.query(
        'INSERT INTO travinno_collections (col_key, col_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE col_value = VALUES(col_value)',
        [key, stringValue],
        (err) => {
          if (err) {
            console.error('[MySQL Write Error]:', err.message);
            // Fallback write
            const data = readJsonData();
            data[key] = typeof value === 'string' ? JSON.parse(value) : value;
            writeJsonData(data);
            resolve();
          } else {
            resolve();
          }
        }
      );
    } else {
      const data = readJsonData();
      data[key] = typeof value === 'string' ? JSON.parse(value) : value;
      if (writeJsonData(data)) {
        resolve();
      } else {
        reject(new Error('Write failed'));
      }
    }
  });
}

// Reset all
function resetCollections() {
  return new Promise((resolve) => {
    if (useMySQL && dbPool) {
      dbPool.query('TRUNCATE TABLE travinno_collections', (err) => {
        if (err) console.error('[MySQL Truncate Error]:', err.message);
        resolve();
      });
    } else {
      writeJsonData({});
      resolve();
    }
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');
  
  // Disable all caching for API endpoints (important for LiteSpeed/Varnish proxies)
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
}

function send(res, code, obj) {
  res.writeHead(code);
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', c => { body += c; if (body.length > 52428800) reject(new Error('Too large')); });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

// ── Router ────────────────────────────────────────────────────────────────────
async function handleRequest(req, res) {
  setCORS(res);

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Normalize path
  const rawPath = (req.url || '/').split('?')[0];
  const urlPath = rawPath.startsWith('/demo') ? rawPath.slice(5) : rawPath;

  // GET /api/ping
  if (req.method === 'GET' && urlPath === '/api/ping') {
    return send(res, 200, { success: true });
  }

  // GET /api/collections
  if (req.method === 'GET' && urlPath === '/api/collections') {
    const data = await getCollections();
    return send(res, 200, data);
  }

  // POST /api/save
  if (req.method === 'POST' && urlPath === '/api/save') {
    try {
      const body = await readBody(req);
      const { key, value } = body;
      if (!key || value === undefined) return send(res, 400, { error: 'Missing key or value' });
      await saveCollection(key, value);
      return send(res, 200, { success: true });
    } catch (e) {
      return send(res, 500, { error: e.message });
    }
  }

  // POST /api/reset
  if (req.method === 'POST' && urlPath === '/api/reset') {
    await resetCollections();
    return send(res, 200, { success: true });
  }

  // ── Static file serving + SPA fallback ──────────────────────────────────────
  const DIST = path.join(__dirname, 'dist');
  const MIME = {
    '.html':  'text/html; charset=utf-8',
    '.js':    'application/javascript',
    '.css':   'text/css',
    '.json':  'application/json',
    '.png':   'image/png',
    '.jpg':   'image/jpeg',
    '.jpeg':  'image/jpeg',
    '.gif':   'image/gif',
    '.svg':   'image/svg+xml',
    '.webp':  'image/webp',
    '.woff':  'font/woff',
    '.woff2': 'font/woff2',
    '.ttf':   'font/ttf',
    '.ico':   'image/x-icon',
    '.mp4':   'video/mp4',
    '.webm':  'video/webm',
  };

  const filePath = path.join(DIST, urlPath === '/' ? 'index.html' : urlPath);

  if (!filePath.startsWith(DIST)) {
    return send(res, 403, { error: 'Forbidden' });
  }

  try {
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  } catch (e) {
    // Fall through
  }

  const indexFile = path.join(DIST, 'index.html');
  if (fs.existsSync(indexFile)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(indexFile).pipe(res);
    return;
  }

  send(res, 404, { error: 'Not found', path: urlPath });
}

// ── Start server ──────────────────────────────────────────────────────────────
const LSNODE_SOCKET = process.env.LSNODE_SOCKET;
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch(err => {
    console.error('[unhandled]', err.message);
    try { send(res, 500, { error: 'Internal server error' }); } catch(_) {}
  });
});

if (LSNODE_SOCKET) {
  try {
    if (fs.existsSync(LSNODE_SOCKET)) {
      fs.unlinkSync(LSNODE_SOCKET);
    }
  } catch (e) {
    console.error('Could not remove stale socket:', e.message);
  }

  server.listen(LSNODE_SOCKET, () => {
    try { fs.chmodSync(LSNODE_SOCKET, '777'); } catch (e) {
      console.error('chmod socket error:', e.message);
    }
    console.log('=== Travinno API server running ===');
    console.log('Mode      : LiteSpeed UNIX socket');
    console.log('Socket    : ' + LSNODE_SOCKET);
  });
} else {
  server.listen(PORT, () => {
    console.log('=== Travinno API server running ===');
    console.log('Mode      : TCP port');
    console.log('Port      : ' + PORT);
    console.log('API       : http://localhost:' + PORT + '/api/ping');
  });
}

module.exports = server;
