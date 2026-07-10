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

  // 404
  send(res, 404, { error: 'Not found', path: urlPath });
}

// ── Start server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5001;
const server = http.createServer((req, res) => {
  handleRequest(req, res).catch(err => {
    console.error('[unhandled]', err.message);
    try { send(res, 500, { error: 'Internal server error' }); } catch(_) {}
  });
});

server.listen(PORT, () => {
  console.log('=== Travinno API server running ===');
  console.log('Port      : ' + PORT);
  console.log('Data file : ' + DATA_FILE);
  console.log('Local API : http://localhost:' + PORT + '/api/ping');
  console.log('Prod  API : https://fazo.in/demo/api/ping');
});

// Passenger compatibility (export for Passenger's require())
module.exports = server;
