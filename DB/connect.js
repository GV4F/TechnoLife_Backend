const mongoose = require("mongoose");
require("dotenv").config();

// const connectDB = async()=> {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
      
//     })
//   } catch(err) {

//   }
// }
// modules.export = connectDB;

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once("open", _ => {
  console.log("Conectado a la base de datos")
});
mongoose.connection.on("error", err => {
  console.error(err)
});