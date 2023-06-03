// Importando el módulo Router
import {Router} from 'express';
import path from 'path';

// Creando la instancia de route
const router = Router();

// Imortando Action function del controlador products
import { getProducts, aboutPage } from '../controllers/products.controller.js';

import { httpErrors } from '../controllers/httpError.controller.js';

router.get('/about', aboutPage);

router.get(["/", "/home"], getProducts);

// Captando todas las direcciones y métodos con .use()
router.use(httpErrors);

export default router;