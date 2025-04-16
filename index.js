// * ENV
require("dotenv").config();
// * LIBRARIES
const morgan = require("morgan");
const { mongoose } = require("mongoose");
const express = require("express");
// * Routes
const productRoute = require("./Routes/Product.routes.js");
const userRoute = require("./Routes/User.routes");

const app = express();

// * CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("Conectando a la base de datos..."))
  .catch(err => console.error(err));

// * MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res)=> {
  res.send("Welcome to TechnoLife server");
});

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

app.listen(process.env.PORT, ()=> {
  console.log(`Server listen in: "http://localhost:${process.env.PORT}"`);
});