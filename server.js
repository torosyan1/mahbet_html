const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios')
const cors = require('cors')

const app = express();

app.use(cors());

app.use('/api', createProxyMiddleware({ target: 'https://mahbet.com', changeOrigin: true }));


app.get('/', async function(request, res){
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000);
