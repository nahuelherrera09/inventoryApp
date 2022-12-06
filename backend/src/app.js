const express = require('express')
const app = express()
const userRouter = require('./routes/user.route')
const routerProduct = require('./routes/products.route')

app.set('port', process.env.PORT || 4000)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rutas

app.get('/', (req,res)=>{
    res.send('Bienvenidos a mi api rest full')
})

app.use('/api/productos', routerProduct)
app.use('/api/users', userRouter)
module.exports = app;

