import * as createCommentService from '../../db/models/createCommentService'

function createComment(req, res){
  createCommentService.createPost(req.body).then(
    app => res.status(200).json(app),
    err => {
      console.error(err);
      res.status(500).send("error");
    }
  );
}

export default createComment;