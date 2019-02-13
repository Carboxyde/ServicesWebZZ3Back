import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

var CommentaireSchema = new Schema({
  authorId: String,
  commentText: String,
  postId: String
}, {collection: 'Comments'});

CommentaireSchema.index({ name: 1});
let Comment = Mongoose.model('CommentaireSchema', CommentaireSchema);

export default Comment;