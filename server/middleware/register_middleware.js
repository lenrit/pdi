const cookieParser = require('cookie-parser');
require('dotenv').config();
const jwt = require("jsonwebtoken");

// function authenticateToken(req, res) {
//     const authCookie = req.cookies['authcookie'];

//     // If there is no cookie, return an error
//     if(authCookie == null) return res.sendStatus(401);

//     // If there is a cookie, verify it
//     jwt.verify(authCookie, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         // If there is an error, return an error
//         if(err) return res.sendStatus(403);
    
//         // If there is no error, continue the execution
//         req.user = user;
//         next();
//     })
// }
const crearCookie=async(req,res,email,passw)=>{
    const token = jwt.sign({email, password}, process.env.JWT_SECRET);
    await req.cookies('authcookie',token,{maxAge:900000,httpOnly:true});
    // req.session.correo="correo";
    // req.session.password="contraseña";
    res.send.json({message:`el correo es:${res.cookie.correo}`})
}
module.exports={
    crearCookie
}