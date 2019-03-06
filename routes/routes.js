import getPosts from './controllers/getPosts'
import createPosts from './controllers/creationPost'
import getUsers from './controllers/getUsers'
import createUsers from './controllers/creationUsers'
import loginUser from './controllers/loginUser'
import getPostsUsers from "./controllers/getPostByUser"
import verifyJWT_MW from "../middleware/auth";
import deletePosts from "./controllers/deletePost"
import getComments from "./controllers/getComments"
import createComment from "./controllers/creationComment"
import bodyParser from "body-parser"
import express from "express"
import allowCrossDomain from "../middleware/allowCrossDomain"

const routes = express.Router();

routes.use(allowCrossDomain)
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.all('/posts', verifyJWT_MW);

routes.get('/posts', getPosts);
routes.put('/posts', createPosts);

routes.get('/users', getUsers);
routes.put('/users', createUsers);

routes.post("/login", loginUser);

routes.get('/posts/user', getPostsUsers);
routes.delete('/posts/delete', deletePosts);

routes.get('/comment', getComments);
routes.put('/comment', createComment);

export default routes;