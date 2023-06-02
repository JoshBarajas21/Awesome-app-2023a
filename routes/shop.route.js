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
    res.sendFile(path.resolve('views', 'about.html'))
});
 
/* 
router.get( '/', (req, res)=>{
    console.log("📣 Sirviendo la Ruta '/' ")
    console.log(products);
    // app.render(<vista>,<view model>)
    // res.render('shop', {layout: false}); Sin plantilla maestra (menu)
    res.render('shop', {shop: 'active',
    docTitle: 'Shop',
    setIcon: '/images/bag-fill.svg'
    });
}); */

router.get(["/", "/home"], (_, res) => {
    console.log(`📕 Inventario de productos: ${JSON.stringify(products)}`);
    console.log(`📒 Sirviendo recurso; 'shop.html'`);
    res.render('shop', {shop: 'active',
    docTitle: 'Shop',
    setIcon: '/images/bag-fill.svg',
    viewStyle: '/css/products.css',
    isProductsListEmpty: products.length === 0,
    products
    });
});

// Captando todas las direcciones y métodos con .use()
router.use( (req, res)=>{
    console.log(`📣 NOT FOUND ${req.url}`);
    // res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', '404.html'));
    res.status(httpStatus.NOT_FOUND).render('404', {layout: false,
    docTitle: 'Error 404 - Página no encontrada',
    setIcon: '/images/cone-striped.svg'
    });
})

export default router;