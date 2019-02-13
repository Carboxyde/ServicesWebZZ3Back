import * as getCommentService from '../../db/models/getPostByUserService'

function getComments(req,res){
  getCommentService
    .getByPage(req.body.postId)
    .then(
      app => {
        res.status(200).json({app});
      }
    );
}

export default getComments;