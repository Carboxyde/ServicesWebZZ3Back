import User from "./modelUsers";

const crypto = require('crypto');

export async function createUser(user) {
  if (user) {
    if (!user._id) {
      console.log("[user] - Creation");
      var hashPass = crypto.createHmac('sha256', user.password).digest('hex');
      return User.create({ username: user.username, password: hashPass, mail: user.mail});
    }
  }
};