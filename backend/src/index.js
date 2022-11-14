// requerimos la variable de entorno al principio para que primero cargue nuestra configuración
require('dotenv').config()

const app = require('./app')

require('./database')

async function main(){
    await app.listen(app.get('port'))
    console.log('El servidor se está ejecutando en el puerto:', app.get('port'))
}

main()