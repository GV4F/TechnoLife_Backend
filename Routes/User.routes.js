const express = require("express");
const userRoute = express.Router();

const usersController  = require("../Controllers/Users.controllers.js");

userRoute.get("/users", usersController.getAllUsers);
userRoute.post("/register", usersController.createUser);
userRoute.post("/login", usersController.login);
userRoute.post("/logout", usersController.logout);

module.exports = userRoute;