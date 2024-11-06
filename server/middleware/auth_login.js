const cookieParser = require('cookie-parser');
require('dotenv').config();
const jwt = require("jsonwebtoken");


function authenticateToken(req, res) {
    const authCookie = req.cookies.authcookie;
    // If there is no cookie, return an error
    if(authCookie == null) return res.json("cookie no encontrada");

    // If there is a cookie, verify it
    jwt.verify(authCookie, process.env.JWT_SECRET, (err, user) => {
        // If there is an error, return an error
        if(err) return res.sendStatus(403);
    
        // If there is no error, continue the execution
        req.user = user;
        res.json({message:"cookie encontrada"})
        next();
    })
}

module.exports={
    authenticateToken
}