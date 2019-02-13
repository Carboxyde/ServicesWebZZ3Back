import Comment from "./modelComment"
import Post from "./modelPosts"

export async function createComment (authorId, commentText, postId){
  return await Comment.create({authorId: authorId, commentText: commentText,
  postId: postId});
}