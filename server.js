import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ─── JSON File Storage (replaces SQLite — no native modules needed) ────────────
// All data is stored in a single JSON file: travinno-data.json
// This works on any hosting without compilation.

const DATA_FILE = path.resolve(__dirname, 'travinno-data.json');

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error reading data file:', e.message);
  }
  return {};
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing data file:', e.message);
    return false;
  }
}

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  writeData({});
  console.log(`Created data store at: ${DATA_FILE}`);
} else {
  console.log(`Data store loaded from: ${DATA_FILE}`);
}

// ─── API Router ────────────────────────────────────────────────────────────────
const apiRouter = express.Router();

// Health Check
apiRouter.get('/ping', (req, res) => {
  res.json({ success: true });
});

// Get all collections
apiRouter.get('/collections', (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    console.error('Error fetching collections:', err);
    res.status(500).json({ error: err.message });
  }
});

// Save/Upsert a collection
apiRouter.post('/save', (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res.status(400).json({ error: 'Missing key or value' });
  }

  try {
    const data = readData();
    data[key] = typeof value === 'string' ? JSON.parse(value) : value;
    const ok = writeData(data);
    if (ok) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to write data file' });
    }
  } catch (err) {
    console.error(`Error saving collection ${key}:`, err);
    res.status(500).json({ error: err.message });
  }
});

// Reset/Clear all collections
apiRouter.post('/reset', (req, res) => {
  try {
    const ok = writeData({});
    if (ok) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to reset data file' });
    }
  } catch (err) {
    console.error('Error clearing data:', err);
    res.status(500).json({ error: err.message });
  }
});

// Mount the API router at both prefixes:
//   /api        → local dev  (http://localhost:5001/api/...)
//   /demo/api   → production (https://fazo.in/demo/api/...)
app.use('/api', apiRouter);
app.use('/demo/api', apiRouter);

// ─── Static + SPA Fallback ─────────────────────────────────────────────────────
// Serves the built React app locally. On Hostinger, Apache serves dist/ directly.
const distPath = path.resolve(__dirname, 'dist');
app.use('/demo', express.static(distPath));
app.get('/demo/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
app.get('/demo', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ─── Start Server ──────────────────────────────────────────────────────────────
// Hostinger Passenger injects PORT automatically.
// Local dev defaults to 5001.
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`  Local:  http://localhost:${PORT}/api/ping`);
  console.log(`  Prod:   https://fazo.in/demo/api/ping`);
});

// Passenger compatibility
export default app;
