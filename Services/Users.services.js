const User = require("../Models/User.model.js");
const hashedPassword = require("../Libs/hashedPassword.js");

class UsersService {
  
  static async getAll() {
    try {
      const data = await User.find();
      return data;

    } catch(err) {
      // res.status(500).json({ message: `An error has ocurred getting users: ${err}}` }); 
      throw new Error(`An error has ocurred getting users: ${err}}`);
    }
  }

  static async createUser(user, password){
    try {
      const pass = await hashedPassword(password);
      const newUser = new User({ user, password: pass });
      const saveNewUser = await newUser.save();
      
      return { _id: saveNewUser._id, user: saveNewUser.user }
      
    } catch (error) {
      res.status(500).json({ message: `An error has ocurred getting users: ${err}}` });
      throw err;
    }
  }
}

module.exports = UsersService;