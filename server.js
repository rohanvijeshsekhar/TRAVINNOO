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

// Serve built React frontend from dist/
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Resolve SQLite database file path
const dbPath = path.resolve(__dirname, './travinno.db');

// Establish connection to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err);
  } else {
    console.log(`Connected to SQLite database at: ${dbPath}`);
  }
});

// Helper functions to wrap sqlite3 methods in Promises
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
    // Create the collections table with TEXT type
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

// Health Check
app.get('/api/ping', (req, res) => {
  res.json({ success: true });
});

// Get all collections
app.get('/api/collections', async (req, res) => {
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
app.post('/api/save', async (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res.status(400).json({ error: 'Missing key or value' });
  }
  
  const valueStr = typeof value === 'string' ? value : JSON.stringify(value);
  
  try {
    // SQLite upsert syntax using INSERT OR REPLACE
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
app.post('/api/reset', async (req, res) => {
  try {
    await dbRun('DELETE FROM collections');
    res.json({ success: true });
  } catch (err) {
    console.error('Error clearing database:', err);
    res.status(500).json({ error: err.message });
  }
});

// SPA fallback — serve index.html for all non-API routes so React Router works
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Express SQLite server running on http://localhost:' + PORT);
});
