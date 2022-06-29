// Imprimir en consola/terminal "Hola, me llamo ${nombre}" en arcoiris
const colors = require('colors')

if(process.argv[2] !== undefined){
    console.log(colors.rainbow(`Hola, me llamo ${process.argv[2]}`))
    console.log(`Hola, me llamo ${process.argv[2]}`.rainbow)
}