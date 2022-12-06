const {Schema, model, default: mongoose} = require('mongoose')

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
        peso:Number,

        user:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
         timestamps:true
    }
)

module.exports = model('Product', productSchema)