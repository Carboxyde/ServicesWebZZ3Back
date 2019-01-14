import * as createPostsService from '../../db/models/creationService'

function createPost(req, res){
  createPostsService.createUser(req.body).then(
    app => res.status(200).json(app),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
}

export default createPost;