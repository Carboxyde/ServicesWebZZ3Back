import Post from "./model";

export async function createUser(post) {
  if (post) {
    if (!post._id) {
      console.log("[post] - Creation");
      return Post.create({});
    }
  }
};