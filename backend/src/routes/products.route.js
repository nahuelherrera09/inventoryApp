const {Router} = require('express');
//Requerir modelo y contenedor con la lógica
const {createProduct, getProducts, deleteByid, updateProduct} = require('../controller/product.controller')
const routerProduct = Router();


routerProduct.route('/')
    //Agregar producto
    .post(createProduct)
    //Obtener todos los productos
    .get(getProducts)

routerProduct.route('/:id')
    .delete(deleteByid)
    .put(updateProduct)


module.exports = routerProduct