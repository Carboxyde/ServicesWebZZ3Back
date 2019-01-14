import getPosts from './controllers/getPosts'
import createPosts from './controllers/creationPost'
import bodyParser from "body-parser"
import express from "express"

const routes = express.Router();

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.get('/posts', getPosts);
routes.post('/posts', createPosts);

export default routes;