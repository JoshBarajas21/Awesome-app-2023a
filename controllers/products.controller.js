// importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

//obtener /admin/add-product
export const getAddProduct = (req, res, next) => {
    //Middlware
    console.log(`ROOT_DIR: ${ROOT_DIR}`)
    if(req.method === "POST") return next();
 
    // sirviendo el formulario
    console.log("📣´Sirviendo el formulario");
    res.render('add-product', {addProduct: `active`,
    viewStyle: '/css/add-product.css',
    docTitle: 'Add Product',
    setIcon: '/images/cart-plus-fill.svg'
    });   
}

export const products = [];

export const postAddProduct =  (req, res) => {
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
}

export const getProducts = (req , res) => {
    console.log(`📕 Inventario de productos: ${JSON.stringify(products)}`);
    console.log(`📒 Sirviendo recurso; 'shop.html'`);
    res.render('shop', {shop: 'active',
    docTitle: 'Shop',
    setIcon: '/images/bag-fill.svg',
    viewStyle: '/css/products.css',
    isProductsListEmpty: products.length === 0,
    products
    });
}

export const aboutPage = (req, res) => {
    console.log("📣 Sirviendo la Ruta '/' ")
    res.render('about', {layout: false,
    docTitle: 'Shop | About',
    setIcon: '/images/find.png'
    });
}