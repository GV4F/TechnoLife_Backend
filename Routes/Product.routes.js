const express = require("express");
const productRoute = express.Router();

const Products = require("../Models/Products.model");

// * Obtain products
productRoute.get("/", async(req, res) => {
  try {
    const { category } = req.query;
    let data;
    if(category) { data = await Products.find({category}); } 
    else { data = await Products.find(); }
    if(data.length === 0) res.status(204).json({ message: "No content" });

    res.status(200).json(data);
  } catch (error) {
    console.error(`An error has ocurred: ${error}`);
    res.status(500).json({ message: "Error getting data" });
  }
});
// * Filter for offer 
productRoute.get("/offer", async(req, res) => {
  try {
    const data = await Products.find({ offer: true });
    if(data.length === 0) res.status(204).json({ message: "No content" });
    res.status(200).json(data);
  } catch (error) {
    console.error(`An error has ocurred: ${error}`);
    res.status(500).json({ message: "Error getting offer" });
  }
})

// * Create a new product
productRoute.post("/", async(req, res) => {
  try {
    const { name, description, price, category, img, keywords, offer, inventory } = req.body;
    const newProduct = new Products({name, description, price, category, img, keywords, offer, inventory});
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);

  } catch(err) {
    console.error("Error to create product:", err);
    res.status(500).json({ mensaje: "Error to create product" });
  }
});



module.exports = productRoute;