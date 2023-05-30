// lógica del enrutado de las operaciones relacionadas con
// la administración de la página

// Importando módulo Router de express
import {Router} from 'express';
// importando path
import path from 'path';
// importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';


// Creando instancia del Router
const router = Router();

// Creando datos en la memoria volátil
export const products = [];

//La instancia de Router es una función Middlware
// se pueden definir manejadores de ruta y aplicarlos
// como middlware con use(), o con los métodos
// get(), post(), put(), delete()

// Hora de hacer formulario de agregar producto

// para entrar a este Middlware debe haber un /admin/add-product
router.get('/add-product', (req, res, next) => {
    // Si la petición es POST; pasamos al sig
    //Middlware
    console.log(`ROOT_DIR: ${ROOT_DIR}`)
    if(req.method === "POST") return next();
 
    // sirviendo el formulario
    console.log("📣´Sirviendo el formulario");
    /* res.send(`
       <form action="/add-product" method="POST">
          <label for="name"> Tittle </label>
          <input type="text" placeholder="Product Name" name="title">
          <label for="description"> Descripción </label>
          <input type="text" placeholder="Product Description" name="description">
          <button type="submit" > Add Product </button>
       </form>
    `) */
    // res.sendFile(path.resolve('views','add-product.html'));
    // Utilizando el ROOT_DIR
    res.sendFile(path.join(ROOT_DIR, 'views','add-product.html'));
});

// para entrar a este otro Middlware debe haber un /admin/add-product y método post
router.post('/add-product', (req, res) => {
    // Realizando extracción de los 
    // datos en la petición (req)
    console.log(req.body);
    // Realizaremos la desestructuración de
    // "name" de la petición
    const {title} = req.body;

    // agregaremos el dato en la base de datos
    products.push(title)

    // Redireccionamiento
    res.redirect('/')
});

// Exportando el enrutador para exponerlo a otro código
export default router;