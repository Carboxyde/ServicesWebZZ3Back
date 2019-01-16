import User from "./modelUsers";

export async function getByPage(page, per_page) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  let result = await User.find({})
    .skip(start)
    .limit(parseInt(per_page));
  return result;
};