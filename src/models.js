const mongoose = requiere ("mongoose");
const producto = mongoose.schema({
    name: {type: String,required : true},
    description: {type: String, required : false},
    price: { type:mumber,required:true},
    quantity: { type:mumber,required:true},
    category: {type: String, required : false},
});
 exports.products = mongoose.model ("products",productsScema);