import * as createUserService from '../../db/models/createUsersService'

function createUser(req, res){
  createUserService.createUser(req.body).then(
    app => res.status(200).json(app),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
}

export default createUser;