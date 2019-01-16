import * as getUserService from '../../db/models/getUserService'

function getUserPosts(req,res){
  getUserService
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(app => res.status(200).json({ app }));
}

export default getUserPosts;