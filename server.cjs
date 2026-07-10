// CommonJS server — works on Hostinger Passenger regardless of "type": "module"
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ─── JSON File Storage ────────────────────────────────────────────────────────
const DATA_FILE = path.join(__dirname, 'travinno-data.json');

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Read error:', e.message);
  }
  return {};
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Write error:', e.message);
    return false;
  }
}

if (!fs.existsSync(DATA_FILE)) {
  writeData({});
  console.log('Created data store: ' + DATA_FILE);
} else {
  console.log('Data store ready: ' + DATA_FILE);
}

// ─── API Routes ───────────────────────────────────────────────────────────────
const apiRouter = express.Router();

apiRouter.get('/ping', (req, res) => {
  res.json({ success: true });
});

apiRouter.get('/collections', (req, res) => {
  try {
    res.json(readData());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

apiRouter.post('/save', (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res.status(400).json({ error: 'Missing key or value' });
  }
  try {
    const data = readData();
    data[key] = typeof value === 'string' ? JSON.parse(value) : value;
    writeData(data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

apiRouter.post('/reset', (req, res) => {
  try {
    writeData({});
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mount API at both paths to cover all routing scenarios
app.use('/api', apiRouter);
app.use('/demo/api', apiRouter);

// ─── Static Files + SPA Fallback ─────────────────────────────────────────────
const distPath = path.join(__dirname, 'dist');
app.use('/demo', express.static(distPath));
app.get('/demo/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
app.get('/demo', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});

// CommonJS export for Passenger
module.exports = app;
