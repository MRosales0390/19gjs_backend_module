const fs = require("fs")

fs.unlink("./Ejemplo.txt", (err) => {
    if(err)
    {
        //throw err
        console.log(err)
        return
    }

    console.log("Ejemplo.txt fue eliminado correctamente.")
})

