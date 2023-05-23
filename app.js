// #Express ya tiene un método listen, así que puedo evitar importar la dependencia de http
// importando expressjs
import express from 'express';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Crear una instancia de express
const app = express();  // (req, res) => { UN MONTON DE CÓDIGO }

// Middlware de parseo de datos del cliente
app.use(express.urlencoded( {extended: true} ))

// route es un Middlware válido y se puede importar así

// Ruta de administrador
app.use(adminRouter);

// Ruta shop
app.use(shopRouter);

//Creando servidor

//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//Arrancando el server
app.listen(port, ip, (err) => { //el callback puede recibir un argumento de error, si hay algún error
    console.log("Still a Live!!! 📣😋 on http://localhost:3000");//maquina local
});

