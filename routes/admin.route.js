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

// Hora de hacer formulario de agregar producto

// para entrar a este Middlware debe haber un /admin/add-product
router.get('/add-product', (req, res, next) => {
    //Middlware
    console.log(`ROOT_DIR: ${ROOT_DIR}`)
    if(req.method === "POST") return next();
 
    // sirviendo el formulario
    console.log("📣´Sirviendo el formulario");
    // app.render(<vista>,<view model>)
    // res.render('add-product', {layout: false}); Sin plantilla maestra (menu)
    res.render('add-product', {addProduct: `active`,
    viewStyle: '/css/add-product.css',
    docTitle: 'Add Product',
    setIcon: '/images/cart-plus-fill.svg'
    });
    
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