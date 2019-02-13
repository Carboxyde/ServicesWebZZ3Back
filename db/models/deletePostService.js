import Post from "./modelPosts";

export async function deletePostService(postId){
  await Post.deleteOne({_id : postId}, function (err,result){
      if (err) console.log(err);
  })
}