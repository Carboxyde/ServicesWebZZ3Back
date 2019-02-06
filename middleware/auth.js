import { verifyJWTToken } from "../libs/auth";

function verifyJWT_MW(req, res, next) {
    let token = req.headers.authorization;
    verifyJWTToken(token)
        .then(decodedToken => {
            req.user = decodedToken.sessionData;
            next();
        })
        .catch(err => {
            res.status(400).json({ message: "Invalid auth token provided." });
        });
}

export default verifyJWT_MW