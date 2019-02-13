import * as getPostByUserService from '../../db/models/getPostByUserService'

function getPosts(req,res){
  getPostByUserService
    .getByPage(req.query.page || 1, req.query.per_page || 10, req.query.userId)
    .then(
      app => {
        res.status(200).json({app});
      }
    );
}

export default getPosts;