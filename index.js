/**
 * Hace función que reciba como parámetro un nombre, y me imprima, Hola {nombre}, cómo están?
 */

const printName = name => {
    let message = ""

    if(name)
        message = `Hola ${name}, cómo estás?`
    else    
        message = "No se indicó un valor válido"

    return message
}

console.log(printName("Marco"))

/**
 * Separar del arreglo nombres los que tienen < 5 letras y > 5 letras
 */

const nombres = [
    "Paco",
    "Lorena",
    "Kike",
    "Abraham",
    "Cris",
    "Victor",
    "Marco",
    "Israel",
    "Annie"
];

const generateNameList = namesList => {
    let largerNames = []
    let shorterNames = []

    if(namesList){
        namesList.forEach(name => {
            if(name.length < 5)
                shorterNames.push(name)
            else if(name.length >= 5)
                largerNames.push(name)
        })

      return {  "largerNames": largerNames,
                "shorterNames": shorterNames    }
    }
}

// Solución con destructuración

const {largerNames, shorterNames} = generateNameList(nombres)
console.log(largerNames)
console.log(shorterNames)
