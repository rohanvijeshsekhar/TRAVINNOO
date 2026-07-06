import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const dbPath = path.join(__dirname, 'travinno.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database:', dbPath);
    initDb();
  }
});

function initDb() {
  db.run(`
    CREATE TABLE IF NOT EXISTS collections (
      key TEXT PRIMARY KEY,
      value TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error creating collections table:', err);
    }
  });
}

// Health Check
app.get('/api/ping', (req, res) => {
  res.json({ success: true });
});

// Get all collections
app.get('/api/collections', (req, res) => {
  db.all('SELECT key, value FROM collections', [], (err, rows) => {
    if (err) {
      console.error('Error fetching collections:', err);
      return res.status(500).json({ error: err.message });
    }
    const data = {};
    rows.forEach(row => {
      try {
        data[row.key] = JSON.parse(row.value);
      } catch (e) {
        data[row.key] = row.value;
      }
    });
    res.json(data);
  });
});

// Save/Upsert a collection
app.post('/api/save', (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res.status(400).json({ error: 'Missing key or value' });
  }
  
  const valueStr = typeof value === 'string' ? value : JSON.stringify(value);
  
  db.run(
    'INSERT INTO collections (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value',
    [key, valueStr],
    function(err) {
      if (err) {
        console.error(`Error saving collection ${key}:`, err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true });
    }
  );
});

// Reset/Clear all collections
app.post('/api/reset', (req, res) => {
  db.run('DELETE FROM collections', [], (err) => {
    if (err) {
      console.error('Error clearing database:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log('Express SQLite server running on http://localhost:' + PORT);
});
