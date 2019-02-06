import Post from "./modelPosts";

export async function getByPage(page, per_page) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  let result = await Post.find({}, 'title description img userId', function (err, posts){
    if(err) console.log(err);
  }).skip(start)
    .limit(parseInt(per_page));
  return result;
};
