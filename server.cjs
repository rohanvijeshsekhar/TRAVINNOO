// Pure Node.js — ZERO external dependencies.
// Uses only built-in 'http', 'fs', 'path' modules.
// This eliminates ALL npm install / Express / Passenger compatibility issues.

'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');

// ── Data store ────────────────────────────────────────────────────────────────
const DATA_FILE = path.join(__dirname, 'travinno-data.json');

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) { console.error('[readData]', e.message); }
  return {};
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) { console.error('[writeData]', e.message); return false; }
}

if (!fs.existsSync(DATA_FILE)) {
  writeData({});
  console.log('Created data store: ' + DATA_FILE);
} else {
  console.log('Data store ready:   ' + DATA_FILE);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');
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
// Strip /demo prefix so the same handler covers:
//   /api/ping          (local dev)
//   /demo/api/ping     (Hostinger production)

async function handleRequest(req, res) {
  setCORS(res);

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Normalize: remove /demo prefix if present
  const rawPath = (req.url || '/').split('?')[0];
  const urlPath = rawPath.startsWith('/demo') ? rawPath.slice(5) : rawPath;

  // GET /api/ping
  if (req.method === 'GET' && urlPath === '/api/ping') {
    return send(res, 200, { success: true });
  }

  // GET /api/collections
  if (req.method === 'GET' && urlPath === '/api/collections') {
    return send(res, 200, readData());
  }

  // POST /api/save
  if (req.method === 'POST' && urlPath === '/api/save') {
    try {
      const body = await readBody(req);
      const { key, value } = body;
      if (!key || value === undefined) return send(res, 400, { error: 'Missing key or value' });
      const data = readData();
      data[key] = (typeof value === 'string') ? JSON.parse(value) : value;
      writeData(data);
      return send(res, 200, { success: true });
    } catch (e) {
      return send(res, 500, { error: e.message });
    }
  }

  // POST /api/reset
  if (req.method === 'POST' && urlPath === '/api/reset') {
    writeData({});
    return send(res, 200, { success: true });
  }

  // ── Static file serving + SPA fallback ──────────────────────────────────────
  // Non-API requests: serve from dist/ folder
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

  // Map URL path to a file in dist/
  // e.g. /assets/index.js → dist/assets/index.js
  //      / or /home/admin → dist/index.html (SPA fallback)
  const filePath = path.join(DIST, urlPath === '/' ? 'index.html' : urlPath);

  // Security: prevent path traversal
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
    // File not found — fall through to SPA fallback
  }

  // SPA fallback: serve index.html for React Router routes
  const indexFile = path.join(DIST, 'index.html');
  if (fs.existsSync(indexFile)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(indexFile).pipe(res);
    return;
  }

  send(res, 404, { error: 'Not found', path: urlPath });
}

// ── Start server ──────────────────────────────────────────────────────────────
// Hostinger uses LiteSpeed Web Server which communicates via a UNIX socket.
// The socket path is passed via LSNODE_SOCKET env variable.
// We MUST listen on that socket, not a TCP port, or we get 503.

const LSNODE_SOCKET = process.env.LSNODE_SOCKET;
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch(err => {
    console.error('[unhandled]', err.message);
    try { send(res, 500, { error: 'Internal server error' }); } catch(_) {}
  });
});

if (LSNODE_SOCKET) {
  // ── LiteSpeed / Hostinger: listen on UNIX socket ──────────────────────────
  // Remove stale socket file if it exists from a previous run
  try {
    if (fs.existsSync(LSNODE_SOCKET)) {
      fs.unlinkSync(LSNODE_SOCKET);
      console.log('Removed stale socket file.');
    }
  } catch (e) {
    console.error('Could not remove stale socket:', e.message);
  }

  server.listen(LSNODE_SOCKET, () => {
    // LiteSpeed needs read/write access to the socket file
    try { fs.chmodSync(LSNODE_SOCKET, '777'); } catch (e) {
      console.error('chmod socket error:', e.message);
    }
    console.log('=== Travinno API server running ===');
    console.log('Mode      : LiteSpeed UNIX socket');
    console.log('Socket    : ' + LSNODE_SOCKET);
    console.log('Data file : ' + DATA_FILE);
  });
} else {
  // ── Local dev: listen on TCP port ─────────────────────────────────────────
  server.listen(PORT, () => {
    console.log('=== Travinno API server running ===');
    console.log('Mode      : TCP port');
    console.log('Port      : ' + PORT);
    console.log('Data file : ' + DATA_FILE);
    console.log('API       : http://localhost:' + PORT + '/api/ping');
  });
}

// LiteSpeed / Passenger compatibility
module.exports = server;
