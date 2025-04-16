const express = require("express");
const userRoute = express.Router();

// const User = require("../Models/User.model.js");
const usersController  = require("../Controllers/Users.controllers.js");

userRoute.post("/login", usersController.createUser);

module.exports = userRoute;