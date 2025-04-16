const UsersService = require("../Services/Users.services.js");

// - GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const data = await UsersService.getAll();
    return res.status(200).json(data);
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "Error"})
  }
}

// - CREATE A NEW POST
const createUser = async(req, res) => {
  try {
    const { user, password } = req.body;
    const newUser = await UsersService.createUser(user, password);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: "Error"})
  }
}

module.exports = {
  getAllUsers,
  createUser
}