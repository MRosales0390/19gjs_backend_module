const fs = require("fs")

fs.writeFile("./Ejemplo.txt", "Hola", "utf-8", (err) => {
    if(err) throw err

    console.log("The file has been saved!")
})