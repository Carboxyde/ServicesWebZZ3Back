import {createJWTToken} from "../../libs/auth";
import User from "../../db/models/modelUsers";

const crypto = require('crypto');

async function loginUser(req, res){
    let { username, password } = req.body;

    try {
        let userData = await User.findOne({mail: username});
        var hashedPass = crypto.createHmac('sha256', password).digest('hex');



        if(userData!=null && hashedPass == userData.password){
            res.status(200).json({
                username: userData.username,
                success: true,
                user: User._id,
                token: createJWTToken({
                    user: User._id,
                    data: { name: username },
                    maxAge: 3600
                })
            });
        }else {
            res.status(401).json({
                message: "Votre identifiant ou mot de passe est incorrect"
            });

        }
    } catch (e) {
        console.log(e);
    }

}

export default loginUser;