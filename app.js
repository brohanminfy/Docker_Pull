const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Sai - From Rohan');
});

app.listen(PORT, () => {
  console.log(`Docker: Server running on port ${PORT}`);
});
