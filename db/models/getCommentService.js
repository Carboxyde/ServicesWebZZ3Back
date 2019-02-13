import Comment from "./modelComment";

export async function getCommentsForPost(postId) {
  return Comment.find({postId: postId}, function (err, posts){
    if(err) console.log(err);
  });
};