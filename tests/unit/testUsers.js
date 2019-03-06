import getUsers from './controllers/getUsers'
import createUsers from './controllers/creationUsers'

const {MongoClient} = require('mongodb');

let connection;
let db;

beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__);
  db = await connection.db(global.__MONGO_DB_NAME__);
});

afterAll(async () => {
  await connection.close();
  await db.close();
});

it('basic user get', async () => {
  var user;
  user.username = "test";
  user.mail = "test@mail.com";
  user.password = "01234";

  createUsers.createUser();
  let res = await getUsers.getByPage();
  res.forEach(function(user){
    expect(user.username).toBe("test");
  })
});