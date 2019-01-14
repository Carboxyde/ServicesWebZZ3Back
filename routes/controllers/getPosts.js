
import express from "express";
import * as getPostsService from '../../db/models/getService'

const app = express.Router();

app.get('/post', (req, res) => {
    getPostsService
      .getByPage(req.query.page || 1, req.query.per_page || 10)
      .then(app => res.status(200).json({ app }));
});

module.exports = app;