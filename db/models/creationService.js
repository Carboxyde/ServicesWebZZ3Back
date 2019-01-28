import Post from "./modelPosts";

export async function createPost(post) {
  if (post) {
    if (!post._id) {
      console.log("[post] - Creation");

      return Post.create({title: post.title, description: post.description,
        img: post.img});
    }
  }
};