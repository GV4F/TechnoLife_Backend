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

// - REGISTER
const createUser = async(req, res) => {
  try {
    const { user, password } = req.body;
    const newUser = await UsersService.createUser(user, password);

    res.cookie("token", newUser.token);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: "Error"})
  }
}

// - LOGIN
const login = async(req, res) => {
  try {
    const { user, password } = req.body;
    const findUser = await UsersService.searchUser(user, password);

    res.cookie("token", findUser.token);
    return res.status(200).json({ message: "Welcome", findUser});
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: "Error"})
  }
}

// - LOGOUT
const logout = async(req, res) => {
  try {
    res.clearCookie("token").json({ message: "Removed Token" }).status(200);
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: "Error"})
  }
}

module.exports = {
  getAllUsers,
  createUser,
  login,
  logout
}