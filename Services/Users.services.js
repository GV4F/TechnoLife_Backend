const User = require("../Models/User.model.js");
const hashedPassword = require("../Libs/hashedPassword.js");
const createToken = require("../Libs/createToken.js");
const validatePassword = require("../Libs/validatePassword.js");

class UsersService {
  
  static async getAll() {
    try {
      const data = await User.find();
      return data;

    } catch(err) {
      throw new Error(`An error has ocurred getting users: ${err}}`);
    }
  }

  static async createUser(user, password){
    try {
      const pass = await hashedPassword(password);
      const newUser = new User({ user, password: pass });
      const saveNewUser = await newUser.save();

      const token = await createToken({_id: saveNewUser._id});
      
      return { _id: saveNewUser._id, user: saveNewUser.user, token }
      
    } catch (error) {
      throw new Error(`An error has ocurred while creating the user: ${error}`);
    }
  }

  static async searchUser(user, password){
    try {
      const findUser = await User.findOne({user});
      if(!findUser) throw new Error("The user doesn't exist");

      const comparePassword = await validatePassword(findUser.password, password);
      if(comparePassword) {
        const token = await createToken({_id: findUser._id});
        return { _id: findUser._id, user: findUser.user, token }
      } else {
        throw new Error(`Incorrected Password`);
      }
      
    } catch (error) {
      throw new Error(`An error has ocurred getting users: ${error}}`);
    }
  }
}

module.exports = UsersService;