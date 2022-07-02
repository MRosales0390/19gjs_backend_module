const fsPromises = require('fs/promises')

const ruta = "archivo-nuevo.txt"

// WriteFile
fsPromises.writeFile(ruta, "Hola soy un archivo nuevo","utf-8")
.then(() => {
    console.log("Se escribió exitosamente el archivo")
})
.catch(error => console.log("Sucedió un error: ", error))

// Append
fsPromises.appendFile(ruta, "\nNueva línea agregada", "utf-8")
.then(() => {
    console.log("Se añadió una línea nueva al archivo")
})
.catch(error => console.log("Ocurrió un error al añadir una nueva línea al archivo: ", error))

// Unlink con Timeout 5s
setTimeout(() => {
    fsPromises.unlink(ruta)
    .then(() => console.log("Se ha eliminado el archivo exitosamente"))
    .catch(error => console.log("Ocurrió un error al intentar eliminar el archivo: ", error))
}, 5000)

/**
 * Reglas para funciones asíncronas
 * 1 - Si se quiere usar async, se tiene que hacer una función asíncrona
 * 2 - El await va dentro de esa función asíncrona, si no está el async, no se puede usar await
 * 3 - El await espera una Promesa
 * 4 - La función async/asíncrona retorna una Promesa
 * 5 - Si retornamos en nuestrá función asíncrona y queremos usar ese valor afuera, then/catch
 */

// Async/Await
const escribirArchivo = async() => {
   /*  return new Promise((resolve, reject) => {

    }) */
    await fsPromises.writeFile(ruta, "Hola soy un archivo nuevo", "utf-8")
}

escribirArchivo()
.then(() => console.log("Se escribió exitosamente el archivo"))
.catch(error => console.log("Sucedió un error: ", error))

const agregarLineaAArchivo = async() => {
    await fsPromises.appendFile(ruta, "\nNueva línea agregada", "utf-8")
}

agregarLineaAArchivo()
.then(() => console.log("Se añadió una línea nueva al archivo"))
.catch(error => console.log("Ocurrió un error al añadir una nueva línea al archivo: ", error))

const eliminarArchivo = async () => {
    await setTimeout( () => {
        fsPromises.unlink(ruta)

        console.log("Se ha eliminado el archivo exitosamente")
    }, 5000)
}

eliminarArchivo()
.catch(error => console.log("Ocurrió un error al intentar eliminar el archivo: ", error))