const cakeToBeBorn = {
    "masaLista": false,
    "pastelHorneado": false,
    "pastelDecorado": false
}

function prepararMasa(pastelAPreparar, funcionHorneado){
    let error = undefined
    
    if(pastelAPreparar === undefined)
    {
        console.log("No se proporcionó un pastel para preparar")
        error = "No se proporcionó un pastel para preparar"
        //return
    }

    if(error === undefined){
        pastelAPreparar.masaLista = true
        console.log("Masa preparada maravillosamente")
        funcionHorneado(pastelAPreparar, decorarPastel, error)
    }
}

function hornearPastel (pastelAHornear, funcionDecorado, error){
    let errorInterno = error === undefined ? undefined : error

    if(!pastelAHornear || pastelAHornear.masaLista === false)
    {
        console.log("No se proporcionó un pastel para hornear")
        errorInterno = "No se proporcionó un pastel para hornear"
        //return
    } 
    if(errorInterno === undefined) {
        pastelAHornear.pastelHorneado = true
        console.log("Pastel horneado maravillosamente")
        funcionDecorado(pastelAHornear, errorInterno)
    }
}

function decorarPastel (pastelADecorar, error){
    let errorInterno = error === undefined ? undefined : error

    if(!pastelADecorar || pastelADecorar.pastelHorneado === false)
    {
        console.log("No se proporcionó un pastel para decorar")
        errorInterno = "No se proporcionó un pastel para hornear"
        //return
    }
    if(errorInterno === undefined){
        pastelADecorar.pastelDecorado = true
        
        console.log("Pastel decorado maravillosamente")
    }
}

setTimeout(() => {
    prepararMasa(cakeToBeBorn, hornearPastel)
}, 3000)

