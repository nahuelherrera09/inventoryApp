const Producto = require('../models/Product')
const productController = {}

productController.createProduct = async (req,res)=>{
    const {name, category, price,cantidad,alto,ancho,profundidad,peso} = req.body

    if(name === undefined){
        return res.status(400).json({error:'content missing'})
    }

    
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

        await newProduct.save()
        res.json({message:'El producto ha sido creado'})
        
    } 
    

productController.getProducts = async (req,res) =>{
    const productos = await Producto.find()
    res.json(productos)
}    

productController.deleteByid = async (req,res) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.json({message:'Producto eliminado'})
}

productController.updateProduct = async (req,res) =>{
    const {name, category, price,cantidad,alto,ancho,profundidad,peso} = req.body
    try {
        await Producto.findByIdAndUpdate(req.params.id, {
            name,
            category,
            price,
            cantidad,
            alto,
            ancho,
            profundidad,
            peso
        })     
    } catch (error) {
        console.log(error)
    }
}

module.exports = productController