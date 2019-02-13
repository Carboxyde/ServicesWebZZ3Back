import {createJWTToken} from "../../libs/auth";
import User from "../../db/models/modelUsers";

const crypto = require('crypto');

async function loginUser(req, res){
    let { mail, password } = req.body;

    try {
        let userData = await User.findOne({mail: mail});
        var hashedPass = crypto.createHmac('sha256', password).digest('hex');
        console.log(userData);

        if(userData!=null && hashedPass == userData.password){
            res.status(200).json({
                username: userData.username,
                success: true,
                user: userData._id,
                token: createJWTToken({
                    user: userData._id,
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