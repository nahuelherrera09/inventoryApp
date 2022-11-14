const {Router} = require('express');
//Requerir modelo y contenedor con la lógica
const {createProduct, getProducts, deleteByid} = require('../controller/product.controller')
const routerProduct = Router();


routerProduct.route('/')
    //Agregar producto
    .post(createProduct)
    //Obtener todos los productos
    .get(getProducts)

routerProduct.route('/:id')
    .delete(deleteByid)

routerProduct.get('/', (req,res)=>{

})
//Obtener producto por su id 
routerProduct.get('/', (req,res)=>{
})
//Elimiar un producto
routerProduct.delete('/', (req,res)=>{
}) 
//Eliminar todos los prodcuctos de una categoría
routerProduct.delete('/', (req,res)=>{
})
//Eliminar una categoría
routerProduct.delete('/', (req,res)=>{
})
//Actualizar un producto por su id 
routerProduct.put('/', (req,res)=>{
})




module.exports = routerProduct