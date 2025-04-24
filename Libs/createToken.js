require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = payload => {
  return new Promise((res, rej) => {
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" }, (err, token) => {
      if(err) {
        console.error(err);
        return rej(err);
      } 
      res(token);
    });
  });
};

module.exports = createToken;