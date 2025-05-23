const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ganti sesuai setup kamu
  database: "todo-app"
});

db.connect((err) => {
  if (err) throw err;
  console.log("🟢 MySQL Connected!");

  // Bikin tabel kalau belum ada
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT false
    )
  `;
  db.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log("✅ Table checked/created.");
  });
});

module.exports = db;
