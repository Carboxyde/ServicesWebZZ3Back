import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  mail: String
}, {collection: 'Users'});

UserSchema.index({ name: 1});
let User = Mongoose.model('User', UserSchema);

export default User;