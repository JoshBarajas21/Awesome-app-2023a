// lógica del enrutado de las operaciones relacionadas con
// la administración de la página

// Importando módulo Router de express
import {Router} from 'express';
/* // importando path
import path from 'path'; */


// Importando funciones del controlador
import { getAddProduct, postAddProduct } from '../controllers/products.controller.js';

// Creando instancia del Router
const router = Router();

// Creando datos en la memoria volátil

// Hora de hacer formulario de agregar producto

// para entrar a este Middlware debe haber un /admin/add-product
router.get('/add-product', getAddProduct);

// para entrar a este otro Middlware debe haber un /admin/add-product y método post
router.post('/add-product', postAddProduct);

// Exportando el enrutador para exponerlo a otro código
export default router;