const express = require("express");
const router = express.Router();
const db = require("../db");

// Get semua todo
router.get("/", (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Tambah todo
router.post("/", (req, res) => {
  const { title } = req.body;
  db.query("INSERT INTO todos (title) VALUES (?)", [title], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, title, completed: false });
  });
});

// Update todo
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  db.query(
    "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
    [title, completed, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: result.affectedRows });
    }
  );
});

// Delete todo
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM todos WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: result.affectedRows });
  });
});

module.exports = router;
