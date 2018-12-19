
import express from "express";
import db from '../../db/db';
const app = express();
app.get('/', (req, res) => {
    res.status(200).send({
        posts:db
    })
});

module.exports = app;