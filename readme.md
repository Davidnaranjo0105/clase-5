# operaciones básicas en la consola de MongoDB
## listar todos los elementos de una colección
 para mostros todos los elementos de  mi coleccion  utilizo el comando  db.products.find()
 Este fue el resultado:

para solo traer  un elemento utilizo este comando:db.products.findOne({"title":"iphone x"})

Este fue el resultado:


## Editar uno de los elementos de la colección
para editar un elemento de mi coleccion  utilizo este comando:db.products.updataOne({title:"iphone6"},{$set{title:"iphone 6 pro max",price:640}}) 

Este fue el resultado:
'''
console.log("Mongo", process.env.MONGODB_CONECTION);
app.use("/", require("./routes"));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONECTION, {
         useNewUrlParser:true,
         useUnifiedTopology: true,
     });

    app.listen(PORT, () => {
      console.log(`Aplicacion corriendo en el puerto:${PORT} `);
    });
  } catch (e) {
    console.error(e);
    process.exit(1); // Forz



'''


## Eliminar uno de los elementos de la colección.

para elimininar un elemento de mi coleccion utilizo el siguiente comando:db.products.deleteOne({title:"iphone9"})

Este fue el resultado: