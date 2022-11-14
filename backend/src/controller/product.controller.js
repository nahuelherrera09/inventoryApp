const Producto = require('../models/Product')
const productController = {}

productController.createProduct = async (req,res)=>{
    const {name, category, price,cantidad,alto,ancho,profundidad,peso} = req.body
    try {
        const newProduct = new Producto({
            name: name,
            category: category,
            price: price,
            cantidad: cantidad,
            alto: alto,
            ancho: ancho,
            profundidad: profundidad,
            peso: peso
        })

        await newProduct.save();
        res.json({message:'El producto ha sido creado'})
    } catch (error) {
        throw new Error
    }    
    } 

productController.getProducts = async (req,res) =>{
    const productos = await Producto.find()
    res.json(productos)
}    

productController.deleteByid = async (req,res) => {
    
    await Producto.findByIdAndDelete(req.params.id)
    res.json({message:'Producto eliminado'})
}

module.exports = productController