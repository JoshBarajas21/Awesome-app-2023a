// Importando el módulo Router
import {Router} from 'express';
import path from 'path';

// Creando la instancia de route
const router = Router();

router.use('/about', (req, res) => {
    console.log("📣 Sirviendo la Ruta '/' ")
    res.send(`
       <h1 style="color: teal"> About... </h1>
       <p style="color: #555"> Esto es una página creada para aprender 
       desarrollo web en Full Stack con <u><b>JS</b></u> </p>
    `)
});
 
router.use( '/', (req, res)=>{
    console.log("📣 Sirviendo la Ruta '/' ")
    // el método send, permite responder html
    /* res.send(`
        <h1> 🪄 About... </h1>
        <p> App for Fullstack Web Dev Course I! 😋</p>
    `); */
    res.sendFile(path.resolve('views','shop.html'));
});

export default router;