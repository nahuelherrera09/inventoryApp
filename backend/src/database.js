const mongoose = require('mongoose')

//conexion

  
  const URI = process.env.MONGODB_URI
  
  mongoose.connect(URI)
  

const connection = mongoose.connection;

connection.once('open',() => {
    console.log('La base de datos ha sido conectada')
})