const getBooks = (req, res) => {
  res.json([
    { id: 1, title: 'Belajar Express', author: 'Ari Awaludin' },
    { id: 2, title: 'Node.js for Fun', author: 'John Doe' }
  ]);
};

module.exports = { getBooks };
