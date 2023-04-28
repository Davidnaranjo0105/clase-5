const express = require("express")
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//const PORT = process.env.PORT || 3000;
const PORT = 27017



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
    process.exit(1); // Forzar el cierre de algo en JS
  }
};

start();