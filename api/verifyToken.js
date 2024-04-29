const jwt = require("jsonwebtoken");

const getJwtToken = (req) => {
    let token = null;

    if (req.cookies && req.cookies["token"]) token = req.cookies["token"];
    else token = req.header("Authorization")?.replace("Bearer ", "") ?? null;
    return token;
};

function verify(req, res, next) {
    try {
        const token = getJwtToken(req);
        if (!token) {
            throw new Error();
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
        
    } catch (err) {
        res.status(401).json("You are not authorized!");
    }

}


module.exports = verify;