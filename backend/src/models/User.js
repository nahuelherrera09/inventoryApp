const {Schema,model} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema (
    {
    username:{
        type: String,
        unique: true
    } ,
        
    name: String,
    passwordHash: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
    }
)


userSchema.set('toJSON',{
    transform: (document,returnedObject)=>{
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

module.exports = model('User', userSchema)