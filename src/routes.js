const {Router} = require("express");
const { Product } = require("./models");
const routes = new Router();
const BASE = "/api/v1/products"; 

routes.get(BASE, async (_, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});
routes.post(BASE, async(req, res) => { 
try {
  const {name, description, price, availableUnits, category } = req.body;
  const Product = await new Product(req.body).save();
  res.status(200).json(Product);
} catch (error) {
  res.status(500).json('Product cant be saved, try again');
}});
routes.patch(`${BASE}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    const product = await Product.findByIdAndUpdate(id, updateFields);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});
routes.delete(`${BASE}/:id`, async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json('Product not found');
    }
    res.status(200).json('Product deleted successfully');
  } catch (error) {
    res.status(500).json(error);
  }
});

  module.exports = routes;