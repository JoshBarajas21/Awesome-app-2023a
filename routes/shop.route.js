// Importando el módulo Router
import {Router} from 'express';
import httpStatus from 'http-status';
import path from 'path';

// Creando la instancia de route
const router = Router();

// Importando productos
import {products} from './admin.route.js'



router.get('/about', (req, res) => {
    console.log("📣 Sirviendo la Ruta '/' ")
    /* res.send(`
       <h1 style="color: teal"> About... </h1>
       <p style="color: #555"> Esto es una página creada para aprender 
       desarrollo web en Full Stack con <u><b>JS</b></u> </p>
    `) */
    res.sendFile(path.resolve('views', 'about.html'))
});
 

router.get( '/', (req, res)=>{
    console.log("📣 Sirviendo la Ruta '/' ")
    // el método send, permite responder html
    /* res.send(`
        <h1> 🪄 About... </h1>
        <p> App for Fullstack Web Dev Course I! 😋</p>
    `); */
    console.log(products);
    res.sendFile(path.resolve('views','shop.html'));
});

// Captando todas las direcciones y métodos con .use()
router.use( (req, res)=>{
    console.log(`📣 NOT FOUND ${req.url}`);
    res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', '404.html'))
})

export default router;