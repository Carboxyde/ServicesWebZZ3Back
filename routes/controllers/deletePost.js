import * as deletePostService from '../../db/models/deletePostService'

export async function deletePost(req,res){
  deletePostService.deletePostService(req.body.postId).then(
    app => {
      res.status(200).json({app});
    }
  );
}