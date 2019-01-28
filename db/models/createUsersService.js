import User from "./modelUsers";

const crypto = require('crypto');

export async function createUser(user) {
  if (user) {
    var regExMail = /^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/;
    var mailExists = await User.findOne({mail: user.username});

    if(mailExists != null) {
      throw Error("Mail must be unique");
    }

    if(!regExMail.test(user.mail)){
      throw Error("Mail must have valid syntax");
    }

    if (!user._id) {
      console.log("[user] - Creation");
      var hashPass = crypto.createHmac('sha256', user.password).digest('hex');
      return User.create({ username: user.mail, password: hashPass, mail: user.mail});
    }
  }
};