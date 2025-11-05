const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from jenkins updated first time, added webhook, this is the third version of node1');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
