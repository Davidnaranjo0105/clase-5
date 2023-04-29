const mongoose = require("mongoose");
const ProductsSchema = mongoose.Schema({
  name: { type: String, require: true },
	description: { type: String, require: false },
	availableUnits: { type: Number, require: false},
	price: { type: Number, require: true },
	category: { type: String, require: false },
});
  module.exports = mongoose.model('products', ProductsSchema);