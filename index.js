const express = require("express");
const app = express();
const todoRoutes = require("./routes/todos");
const cors = require("cors");
const PORT = 3000;

app.use(cors)
app.use(express.json());
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
