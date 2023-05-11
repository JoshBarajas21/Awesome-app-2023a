// importar modulo de http
import http from 'http';

// importando expressjs
import express from 'express';

// Crear una instancia de express
const app = express();  // (req, res) => { UN MONTON DE CÓDIGO }

// Registrando nuestro primer middlware
//este método nos permite registrar un nuevo middlware
//el parámetro next, no se pone si tu eres el último en contestar
/* app.use( (req, res, next)=>{ 
    console.log("📣 Executing the Middlware 1");
    // Invocadno al siguiente Middlware
    next();                                             
 } ); 
 app.use( (req, res, next)=>{
    console.log("⭐ Executing the Middlware 2");
    next();
 }); */

 app.use( (req, res, next)=>{
    console.log("🏁 Registrando Petición");
    next();
 });



 app.use( (req, res, next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
 });

 app.use( (req, res)=>{
    console.log("⭐ Responses to client");
    //el método send, permite responder html
    res.send(`
        <h1> Welcome to Express </h1>
        <p> This is mu awesome app </p>
    `);
 });

//Creando servidor
const server = http.createServer(app); //funge como código de backend (antes eramos responsables de hacelor, ahora
// es express es quien nos provee de una lógica inicial)

//Definir puertos
const port = 3000;
const ip = "0.0.0.0"; //en git gub
/* const ip = "127.0.0.1" en máquina local*/

//Arrancando el server

server.listen(port, ip, (err) => { //el callback puede recibir un argumento de error, si hay algún error
    console.log("Still a Live!!! 📣😋 on http://localhost:3000");//maquina local
    console.log(`Still a Live!!! 📣😋 on https://${process.env.IP}:${process.env.PORT}`); //experimento de GIT
});
