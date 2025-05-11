console.log("Hello, world!");
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(3000, () => {
console.log('🚀 Server running at http://localhost:3000');
});
