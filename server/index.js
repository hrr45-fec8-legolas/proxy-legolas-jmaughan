const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/items', createProxyMiddleware({
  target: 'http://127.0.0.1:3002/',
  changeOrigin: true,
}));
app.use('/api/related_products', createProxyMiddleware({
  target: 'http://127.0.0.1:3003/',
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`Proxy server listening on http://127.0.0.1:${port}`);
})
