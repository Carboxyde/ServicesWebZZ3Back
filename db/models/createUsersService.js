import User from "./modelUsers";

export async function createUser(user) {
  if (user) {
    if (!user._id) {
      console.log("[user] - Creation");
      return User.create({ username: user.username, password: user.password, mail: user.mail});
    }
  }
};