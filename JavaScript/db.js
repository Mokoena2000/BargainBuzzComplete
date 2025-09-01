// db.js - sets up SQLite and seeds demo data if empty
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'products.db');

function init() {
  const db = new sqlite3.Database(DB_PATH);
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT,
      description TEXT
    )`);

    db.get("SELECT COUNT(*) AS count FROM products", (err, row) => {
      if (err) {
        console.error("Error counting products:", err);
        return;
      }
      if (row.count === 0) {
        const stmt = db.prepare("INSERT INTO products (name, price, image, description) VALUES (?,?,?,?)");
        const seed = [
          ["Wireless Earbuds", 399.00, "/assets/earbuds.jpg", "Compact Bluetooth earbuds with charging case."],
          ["Chef Knife Set", 549.00, "/assets/knife-set.jpg", "6-piece stainless steel kitchen knife set."],
          ["Smartwatch Lite", 799.00, "/assets/smartwatch.jpg", "Heart-rate, step counter, 7-day battery."],
          ["Ceramic Dinner Plates (4)", 299.00, "/assets/plates.jpg", "Durable everyday plates — dishwasher safe."],
          ["USB-C Charger 30W", 249.00, "/assets/charger.jpg", "Fast-charging adapter for phones & tablets."]
        ];
        for (const row of seed) stmt.run(row);
        stmt.finalize();
        console.log("Seeded demo products.");
      } else {
        console.log(`Products table already has ${row.count} items.`);
      }
    });
  });
  db.close();
}

if (require.main === module) {
  init();
} else {
  module.exports = { init, DB_PATH };
}