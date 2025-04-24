require("dotenv").config();
const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if(!token) return res.status(401).json({ message: "Unauthorized"});

  jwt.verify(token, process.env.SECRET_KEY, (error, user)=>{
    if(error) return res.status(403).json({ message: "Invalid Token"});
    console.log(user);
    req.user = user;
    next();
  });
}

module.exports = validateToken;