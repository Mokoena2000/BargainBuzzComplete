
const sqlite3 = require("sqlite3").verbose();
const DB_PATH = "./bargainbuzz.db";

function init() {
  const db = new sqlite3.Database(DB_PATH);

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT NOT NULL
    )`);

    db.get("SELECT COUNT(*) as count FROM products", (err, row) => {
      if (err) {
        console.error("DB error:", err);
        return;
      }
      if (row.count === 0) {
        const stmt = db.prepare("INSERT INTO products (name, price, image) VALUES (?, ?, ?)");
        stmt.run("Wireless Mouse", 25.99, "assets/product1.jpg");
        stmt.run("Mechanical Keyboard", 79.99, "assets/product2.jpg");
        stmt.run("Gaming Headset", 59.99, "assets/product3.jpg");
        stmt.run("HD Monitor", 199.99, "assets/product4.jpg");
        stmt.finalize(() => {
          db.close(); // Only close after seeding is done
          console.log("Database seeded.");
        });
      } else {
        db.close(); // close if no seeding needed
      }
    });
  });
}

module.exports = { init, DB_PATH };
