const {Router} = require("express");
const { Product } = require("./models");

const routes = new Router;

routes.get("/health", (_, res) => res.send("check"));
//estudiar heatlh check

const BASE = "/api/v1/products";

routes.get(BASE, async(_,res)=>{
    const products = await Product.find();
    res.json(products);
});

routes.post(BASE, async(_, res) => {                     // solicitud post  agregar productos 
    const {name, description, price, quantity, category } = req.body;  
    if (name && description && price && quantity && category) {    //  si nos ingresas name,descriptios...
      readProducts(function (err, products) {
        if(err){
          res.status(404)
        } else {
          const id = products.length + 1;     // el id va  ser igual al ultimo que este por defecto + 1 siendo en ultimo el que se ingreso 
          const newProduct = ({ id,...req.body});  // el nuevo producto tiene que tener name descriprion
          products.push(newProduct);
          console.log(products)
          if (writeProducts(products)) {
            res.status(200).json(products); 
          }else{
            res.status(500).json('Product cant be saved, try again'); 
          }
          
        }
      })
    }else{
      res.send('Product cant be save, all data is required');
      res.status(400).end();
    }
  }); 

  module.exports = routes;