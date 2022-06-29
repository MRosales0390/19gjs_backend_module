/**
 * Crear un directorio y archivos en ese directorio,
 * y eliminar los que hay dentro del directorio.
 */
const fs = require("fs")
const currentPath = "./folderToBeRemoved"

const finishExec = (errorMessage, files = []) => {
    //console.log(files)
    if(errorMessage){
        throw errorMessage
    } else if(Array.isArray(files) && files.length > 0){
        //console.log("aqui", files)
        files.forEach((file, index) => {
            console.log(`Archivo ${index} `, file)
        })
    }else{
        console.log("Actividad ejecutada exitosamente")
    }
}

fs.mkdir(currentPath, { recursive: true}, finishExec)

for(let i = 0; i < 10; i++){
    fs.writeFile(currentPath + `/Ejemplo${i}.txt`, "Hola", "utf-8", (err) => {
        if(err) throw err

        console.log(`El archivo Ejemplo${i}.txt fue creado`)
    })
}

fs.readdir(currentPath, "utf-8", finishExec)


fs.readdir(currentPath, "utf-8", (error, files) => {
    if(error) throw error;

    files.forEach(file => {
        fs.rm(`./${currentPath}/${file}`, { recursive: true }, error => { 
            if(error) throw error;
            
            console.log(`Archivo ${file} eliminado`)
        })
    })
}) 

//fs.rmdir(currentPath, { recursive: true }, finishExec)