import * as deletePostService from '../../db/models/deletePostService'

export default async function deletePost(req,res){
  deletePostService.deletePostService(req.body.postId).then(
    app => {
      res.status(200).json({app});
    }
  );
}