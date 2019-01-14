import Post from "./model";

export async function getByPage(page, per_page) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  let result = await Post.find({}, 'title description img', function (err, posts){
    if(err) console.log(err);
    console.log(posts)
  }).skip(start)
    .limit(parseInt(per_page));
  return result;
};

export default getByPage()