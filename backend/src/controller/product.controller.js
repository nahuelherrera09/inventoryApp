const Producto = require('../models/Product')
const User = require('../models/User')
const productController = {}

productController.createProduct = async (req,res,next)=>{
    const {name, category, price,cantidad,alto,ancho,profundidad,peso} = req.body
    const user = await User.findById(req.body.userId)

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
            peso: peso,
            user: user._id
        })

        const savedProduct = await newProduct.save()
        user.products = user.products.concat(savedProduct._id)
        await user.save()
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