/*
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('hello world!');
})
server.listen(8080);*/

import express from "express";
import db from './db/db';
const app = express();
app.get('/api/v1/posts', (req, res) => {
    res.status(200).send({
        posts:db
    })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});