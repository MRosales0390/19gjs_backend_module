//Promesa -> representa el resultado de una ejecución asíncrona

const cakeToBeBorn = {
    "masaLista": false,
    "pastelHorneado": false,
    "pastelDecorado": false
}

const prepararPastelatzo = new Promise((resolve, reject) => {
    let error = undefined
    //prepararMasa
    if(cakeToBeBorn === undefined)
    {
        error = "No se proporcionó un pastel para preparar"
        reject(error)
    }

    cakeToBeBorn.masaLista = true
    resolve(cakeToBeBorn)

})  
.then( cakeToBeBorn => {
    //hornearPastel
    return new Promise (function(resolve, reject) {
        let error = undefined

        if(cakeToBeBorn.masaLista)
        {
            console.log("Masa preparada maravillosamente")

            cakeToBeBorn.pastelHorneado = true
            resolve(cakeToBeBorn)
        }
        else {
            error = "No se proporcionó un pastel para hornear"
            reject(error)
        }
    })
})
.then( cakeToBeBorn => {
    //decorarPastel
    return new Promise (function(resolve, reject) {
        let error = undefined

        if(cakeToBeBorn.pastelHorneado){
            console.log("Pastel horneado maravillosamente")

            cakeToBeBorn.pastelDecorado = true
            resolve(cakeToBeBorn)
        }
        else {
            error = "No se proporcionó un pastel para decorar"
            reject(error)
        }
    })
})
.then( cakeToBeBorn => {
    let error = undefined

    if(cakeToBeBorn.pastelDecorado){
        console.log("Pastel decorado maravillosamente \nPastel terminado")
    }
    else{
        error = "No se proporcionó un pastel terminado"
        throw error
    }
})
.catch(error => console.log(error))