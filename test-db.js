import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, './travinno.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Opened database at:', dbPath);
    db.all('SELECT key, length(value) as len FROM collections', [], (err, rows) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Database contents (keys and value lengths):');
        console.log(rows);
      }
      db.close();
    });
  }
});
