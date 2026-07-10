import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ─── SQLite Setup ──────────────────────────────────────────────────────────────
// Use absolute path so it works correctly regardless of working directory
const dbPath = path.resolve(__dirname, 'travinno.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err);
  } else {
    console.log(`Connected to SQLite database at: ${dbPath}`);
  }
});

const dbRun = (sql, params = []) => new Promise((resolve, reject) => {
  db.run(sql, params, function (err) {
    if (err) reject(err);
    else resolve(this);
  });
});

const dbAll = (sql, params = []) => new Promise((resolve, reject) => {
  db.all(sql, params, (err, rows) => {
    if (err) reject(err);
    else resolve(rows);
  });
});

async function initDb() {
  try {
    await dbRun(`
      CREATE TABLE IF NOT EXISTS collections (
        key TEXT PRIMARY KEY,
        value TEXT
      )
    `);
    console.log('Verified SQLite table schema.');
  } catch (err) {
    console.error('Error initializing SQLite database:', err);
  }
}

initDb();

// ─── API Router ────────────────────────────────────────────────────────────────
// On Hostinger Passenger, all requests are routed through server.js.
// Apache serves /demo/ static files directly; Passenger handles /demo/api/*
// Mount at both /api (local dev) and /demo/api (Hostinger production)

const apiRouter = express.Router();

// Health Check
apiRouter.get('/ping', (req, res) => {
  res.json({ success: true });
});

// Get all collections
apiRouter.get('/collections', async (req, res) => {
  try {
    const rows = await dbAll('SELECT key, value FROM collections');
    const data = {};
    rows.forEach(row => {
      try {
        data[row.key] = JSON.parse(row.value);
      } catch (e) {
        data[row.key] = row.value;
      }
    });
    res.json(data);
  } catch (err) {
    console.error('Error fetching collections:', err);
    res.status(500).json({ error: err.message });
  }
});

// Save/Upsert a collection
apiRouter.post('/save', async (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res.status(400).json({ error: 'Missing key or value' });
  }

  const valueStr = typeof value === 'string' ? value : JSON.stringify(value);

  try {
    await dbRun(
      'INSERT OR REPLACE INTO collections (key, value) VALUES (?, ?)',
      [key, valueStr]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(`Error saving collection ${key}:`, err);
    res.status(500).json({ error: err.message });
  }
});

// Reset/Clear all collections
apiRouter.post('/reset', async (req, res) => {
  try {
    await dbRun('DELETE FROM collections');
    res.json({ success: true });
  } catch (err) {
    console.error('Error clearing database:', err);
    res.status(500).json({ error: err.message });
  }
});

// Mount API router at both paths:
//   /api        → local dev (http://localhost:5001/api/...)
//   /demo/api   → Hostinger production (https://fazo.in/demo/api/...)
app.use('/api', apiRouter);
app.use('/demo/api', apiRouter);

// ─── Static + SPA Fallback ─────────────────────────────────────────────────────
// On Hostinger, Apache already serves static files in public_html/demo/
// But we still serve dist/ here so the app works in local dev too.
// The SPA fallback ensures React Router works for direct URL access.
const distPath = path.resolve(__dirname, 'dist');
app.use('/demo', express.static(distPath));
app.get('/demo/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
app.get('/demo', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ─── Start Server ──────────────────────────────────────────────────────────────
// On Hostinger Passenger, the PORT env variable is injected automatically.
// Locally, defaults to 5001.
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`  Local:  http://localhost:${PORT}/api/ping`);
  console.log(`  Prod:   https://fazo.in/demo/api/ping`);
});

// Passenger compatibility — export app for Passenger's require() mode
export default app;
