const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Jennie kim ko chit dL...hee hee');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

