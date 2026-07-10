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
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Resolve paths
const distPath = path.resolve(__dirname, 'dist');
const dbPath = path.resolve(__dirname, './travinno.db');

// Serve built React frontend static assets under /demo/
app.use('/demo', express.static(distPath));

// ─── SQLite Setup ──────────────────────────────────────────────────────────────

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
// Mount at BOTH /api (local dev) and /demo/api (production via fazo.in/demo/)

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

// Mount the same router at both prefixes
app.use('/api', apiRouter);       // local dev:  http://localhost:5001/api/...
app.use('/demo/api', apiRouter);  // production: https://fazo.in/demo/api/...

// ─── SPA Fallback ──────────────────────────────────────────────────────────────
// All /demo/* routes that aren't /demo/api/* get index.html (React Router support)
app.get('/demo/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Also handle bare /demo (no trailing slash)
app.get('/demo', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express SQLite server running on http://localhost:${PORT}`);
  console.log(`  Local dev API:  http://localhost:${PORT}/api/ping`);
  console.log(`  Production API: https://fazo.in/demo/api/ping`);
});
