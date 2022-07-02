//Promesa -> representa el resultado de una ejecución asíncrona

const cakeToBeBorn = {
    "masaLista": false,
    "pastelHorneado": false,
    "pastelDecorado": false
}

const prepararPastelatzo = pastelAPreparar => {
    return new Promise((resolve, reject) => {
        let error = undefined
        //prepararMasa
        if(pastelAPreparar === undefined)
        {
            error = "No se proporcionó un pastel para preparar"
            reject(error)
        }

        pastelAPreparar.masaLista = true
        resolve(pastelAPreparar)
    })
}  

const hornearPastel = pastelAHornear => {
    //hornearPastel
    return new Promise (function(resolve, reject) {
        let error = undefined

        if(pastelAHornear.masaLista)
        {
            console.log("Masa preparada maravillosamente")

            pastelAHornear.pastelHorneado = true
            resolve(pastelAHornear)
        }
        else {
            error = "No se proporcionó un pastel para hornear"
            reject(error)
        }
    })
}

const decorarPastel = pastelADecorar => {
    //decorarPastel
    return new Promise (function(resolve, reject) {
        let error = undefined

        if(pastelADecorar.pastelHorneado){
            console.log("Pastel horneado maravillosamente")

            pastelADecorar.pastelDecorado = true
            resolve(pastelADecorar)
        }
        else {
            error = "No se proporcionó un pastel para decorar"
            reject(error)
        }
    })
}


const cocinarPastel = async(pastelACocinar) => {
    const masaPreparada = await prepararPastelatzo(cakeToBeBorn)
    console.log("masaPreparada", masaPreparada)
    const pastelHorneado = await hornearPastel(cakeToBeBorn)
    console.log("masaPreparada", pastelHorneado)
    const pastelADecorar = await decorarPastel(cakeToBeBorn)
    console.log("masaPreparada", pastelADecorar)

}

cocinarPastel({...cakeToBeBorn})