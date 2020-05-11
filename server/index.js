const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Need to ping all services for the data that should be rendered
  res.status(200).send('Hello World!');
})

app.listen(port, () => {
  console.log(`Proxy server listining on http://127.0.0.1:${port}`);
})
