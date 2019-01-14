
import express from "express";
import * as postsService from '../../db/models/getService'

const app = express();

app.get('/', (req, res) => {
    postsService
      .getByPage(req.query.page || 1, req.query.per_page || 10)
      .then(users => res.status(200).json({ users }));

});

module.exports = app;