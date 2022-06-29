const fs = require("fs")
const currentPath = "./folderCreationTest"

const finishExec = (errorMessage, files = []) => {
    if(errorMessage){
        throw errorMessage
    } else if(files.length > 0){
        files.forEach((file, index) => {
            console.log(`Archivo ${index} `, file)
        })
    }else{
        console.log("Actividad ejecutada exitosamente")
    }
}

fs.mkdir(currentPath, { recursive: true}, finishExec)

fs.writeFile(currentPath + "/Ejemplo.txt", "Hola", "utf-8", (err) => {
    if(err) throw err

    console.log("The file has been saved!")
})

fs.readdir(currentPath, "utf-8", finishExec)