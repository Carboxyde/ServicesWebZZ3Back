import {createJWTToken} from "../../libs/auth";

function loginUser(req, res){
    let { username, password } = req.body;
    console.log(username);
    console.log(password);
    if (username === "admin" && password === "Password1") {
        res.status(200).json({
            success: true,
            token: createJWTToken({
                sessionData: { name: username },
                maxAge: 3600
            })
        });
    } else {
        res.status(401).json({
            message: "Login ou mot de passe incorrecte."
        });
    }
}

export default loginUser;