import * as createUserService from '../../db/models/createUsersService'

async function createUser(req, res){
  var user = await createUserService.createUser(req.body).catch(
    (err) => {
      console.log(err);
      res.status(500).send("error");
    }
  );
  res.status(200).json(user);
}

export default createUser;