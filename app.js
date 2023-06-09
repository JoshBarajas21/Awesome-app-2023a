// #Express ya tiene un método listen, así que puedo evitar importar la dependencia de http
// importando expressjs
import express from 'express';
import path from 'path';

import httpStatus from 'http-status';

// desestructurando Engine
import { engine } from 'express-handlebars'

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';
import { ROOT_DIR } from './helpers/paths.js';

// Crear una instancia de express
const app = express();  // (req, res) => { UN MONTON DE CÓDIGO }

// Creando una instancia de template engine
const hbsTemplateEngine = engine({
    // extensión de los archivos de plantillas
    extname: '.hbs',
    // nombre del diseño por defecto
    defaultLayout: 'main',
});

// registro y establecimiento de la instancia de express
    
// TE1. se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2.Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));


// Middlware de parseo de datos del cliente
app.use(express.urlencoded( {extended: true} ))

// Se registra el Middlware para
// Servidor de archivos estáticos 
// middlware | métod static de express | ruta de los estáticos
app.use( express.static(path.join(ROOT_DIR, 'public')) );


// Ruta de administrador
app.use( '/admin' ,adminRouter);
                                                                  
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

