const {Schema, model} = require('mongoose')

const productSchema = new Schema(
    {
        name: String,
        category: String,
        price: Number,
        cantidad: Number,
        //sku: String
    
        //Dimensiones:
        alto: Number,
        ancho: Number,
        profundidad:Number,
        peso:Number
    },
    {
         timestamps:true
    }
)

module.exports = model('Product', productSchema)