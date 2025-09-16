const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Soe Tint Aung + Jennie Kim hal hal');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

