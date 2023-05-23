// #Express ya tiene un método listen, así que puedo evitar importar la dependencia de http

// importar modulo de http
//import http from 'http';

// importando expressjs
import express from 'express';

// Importando el enrutador
import adminRouter from './routes/admin.route'

// Crear una instancia de express
const app = express();  // (req, res) => { UN MONTON DE CÓDIGO }

// Middlware de parseo de datos del cliente
// app.use(express.urlencoded())
app.use(express.urlencoded( {extended: true} ))

// Registrando nuestro primer middlware
//este método nos permite registrar un nuevo middlware
//el parámetro next, no se pone si tu eres el último en contestar
/* app.use( (req, res, next)=>{ 
    console.log("📣 Executing the Middlware 1");
    // Invocando al siguiente Middlware
    next();                                             
 } ); 
 app.use( (req, res, next)=>{
    console.log("⭐ Executing the Middlware 2");
    next();
 }); */

 // Middlware de propósitos específicos

// Middlware Globales después de los que tienen un path
 app.use( (req, res, next)=>{
    console.log("🏁 Registrando Petición");
    next();
 });


 app.use( (req, res, next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
 });

 //Probando que pasa si el about está por debajo de los middlware genéricos
app.use('/about', (req, res) => {
   res.send(`
      <h1 style="color: teal"> About... </h1>
      <p style="color: #555"> Esto es una página creada para aprender 
      desarrollo web en Full Stack con <u><b>JS</b></u> </p>
   `)
 });

//  Get add-product
//  app.use('/add-product', (req, res, next) => {
 app.get('/add-product', (req, res, next) => {
   // if(req.method === "POST") return next();

   // sirviendo el formulario
   console.log("📣´Sirviendo el formulario");
   res.send(`
      <form action="/add-product" method="POST">
         <label for="name"> Tittle </label>
         <input type="text" placeholder="Product Name" name="title">
         <label for="description"> Descripción </label>
         <input type="text" placeholder="Product Description" name="description">
         <button type="submit" > Add Product </button>
      </form>
   `)
 });

//  Middlware que sea detonado por un método POST en la ruta /add-product
 app.post('/add-product', (req, res) => {
   // Realizando extracción de los 
   // datos en la petición (req)
   for(const prop in req.body){
      // console.log(`PROP: ${prop}`)
      console.log(`${prop}: ${req.body[prop]}`)
   }
   // Redireccionamiento
   res.redirect('/')
 });

 app.use( (req, res)=>{
    console.log("⭐ Responses to client");
    //el método send, permite responder html
    res.send(`
        <h1> Welcome to Express </h1>
        <p> This is my awesome app 😋</p>
    `);
 });

//Creando servidor
//const server = http.createServer(app); //funge como código de backend (antes eramos responsables de hacelor, ahora
// es express es quien nos provee de una lógica inicial)

//Definir puertos
const port = 3000;
const ip = "0.0.0.0"; //en git gub
/* const ip = "127.0.0.1" en máquina local*/

//Arrancando el server

app.listen(port, ip, (err) => { //el callback puede recibir un argumento de error, si hay algún error
    console.log("Still a Live!!! 📣😋 on http://localhost:3000");//maquina local
   //  console.log(`Still a Live!!! 📣😋 on https://${process.env.IP}:${process.env.PORT}`); //experimento de GIT
});