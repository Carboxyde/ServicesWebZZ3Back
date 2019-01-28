import * as getPostsService from '../../db/models/getService'

function getPosts(req,res){
  getPostsService
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(app => res.status(200).json({ app }));
}

export default getPosts;