/*if(process.argv[3] !== undefined)
    console.log(process.argv)*/
 
/**
 * Generar un script que reciba parámetros y nos diga si el nombre está en el arreglo
 * Si sí está, que nos imprima "Sí estás". Y si no está, que imprima "Fuera de aquí"
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
    "Annie",
    "Ërnesto",
    "Francisco",
    "Lenny",
    "Rod",
    "Noemi",
    "Benjamin"
  ];

  const countChars = namesList => {
    if(namesList){
        return namesList.reduce((namesObject, currentName) => 
        Object.assign(namesObject, {[currentName]:currentName.length}),{})
    }
  }

  console.log(countChars(nombres))

  /*
  const verifyIfExists = name => {
    let message = ""

    if(nombres.findIndex(nombre => nombre.toLocaleLowerCase() === name.toLocaleLowerCase()) > 0)
        message = "Sí estás"
    else
        message = "Fuera de aquí"

    return message
  }

  console.log(verifyIfExists(process.argv[2] !== undefined ? process.argv[2] : ""))
*/