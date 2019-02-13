import Post from "./modelPosts";

export async function getByPage(page, per_page, userId) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  console.log(userId);
  let result = await Post.find({userId: userId}, function (err, posts){
    if(err) console.log(err);
  }).skip(start)
    .limit(parseInt(per_page));
  return result;
};