const Producto = require('../models/Product')
const User = require('../models/User')
const productController = {}
const jwt = require('jsonwebtoken')

//Funcion para aislar el token del header authorization. 
const getTokenFrom = req =>{
    const authorization  =  req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        return authorization.substring(7)
    }
    return null
}

productController.createProduct = async (req,res,next)=>{
    
    const {name, category, price,cantidad,alto,ancho,profundidad,peso} = req.body

    //obtenemos el token de la req
    const token = getTokenFrom(req)
    //verificamos la validez del token. el objeto decodificado contiene los campos username y id, para saber quien hizo la solicitud
    const decodedToken = jwt.verify(token, process.env.SECRET)

    //encontramos el usuario en nuestra BD de Users mediante el ID que obtenemos del token decodificado
    const user = await User.findById(decodedToken.id)

    //si no hay token o el token entregado no contiene la identidad del usuario se envia el codigo de error 401: 'unauthorized'
    if(!token || !decodedToken.id){
        return res.status(401).json({error:'token missing or invalid'})
    }
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