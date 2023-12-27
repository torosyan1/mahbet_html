const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios')
const app = express();

app.use('/', createProxyMiddleware({ toProxy:'', target: 'https://mahbet216.com/mahbet_html', changeOrigin: true }));


app.listen(3000);
