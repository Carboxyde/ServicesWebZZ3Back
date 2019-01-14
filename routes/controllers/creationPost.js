import express from "express";
import * as createPostsService from '../../db/models/creationService'

const app = express.Router();
app.use(bodyParser.jason());

app.post("/post", (req, res) => {
  createPostsService.createUser(req.body).then(
    app => res.status(200).json(app),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
});

module.exports = app;