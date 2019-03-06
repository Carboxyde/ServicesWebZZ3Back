import User from '../../db/models/modelUsers'
import Post from '../../db/models/modelPosts'
import mockingoose from 'mockingoose'

beforeEach(() => {
  mockingoose.resetAll();
  jest.clearAllMocks();
});

it('User model test', () => {
  mockingoose.User.toReturn([{username: 'test', password: 'hashPass',
    mail: 'randomMail@random.rand'}]);

  return User.find().where('username').in([1]).then( result =>{
    expect(result).toHaveLength(1);
    expect(result[0].toObject()).toHaveProperty('_id');
    expect(result[0].toObject()).toMatchObject({username: 'test', password: 'hashPass',
      mail: 'randomMail@random.rand'});
    expect(result[0]).toBeInstanceOf(User);
  })
});

it('User not here model test', () => {
  mockingoose.User.toReturn([]);

  return User
    .find()
    .then(result => {
      expect(result).toHaveLength(0);
    });
});

it('User should not findOne', () => {
  mockingoose.User.toReturn(null, 'findOne');

  return User
    .findOne()
    .then(result => {
      expect(result).toBeFalsy();
    });
});

it('Post model test', () => {
  mockingoose.Post.toReturn([{title: 'title', description: 'description',
    img: 'img', userId : 'user'}]);

  return Post.find().where('title').in([1]).then( result =>{
    expect(result).toHaveLength(1);
    expect(result[0].toObject()).toHaveProperty('_id');
    expect(result[0].toObject()).toMatchObject({title: 'title', description: 'description',
      img: 'img', userId : 'user'});
    expect(result[0]).toBeInstanceOf(Post);
  })
});

it('Post not here model test', () => {
  mockingoose.Post.toReturn([]);

  return Post
    .find()
    .then(result => {
      expect(result).toHaveLength(0);
    });
});

it('Post should not findOne', () => {
  mockingoose.Post.toReturn(null, 'findOne');

  return Post
    .findOne()
    .then(result => {
      expect(result).toBeFalsy();
    });
});