/**
 * Async/Await
 * async -> Asincrono -> que indica cuando una funcion va a ser asincrona. (internamente un await)
 * await -> Esperar -> es para esperar que una PROMESA se cumpla.
 */


 const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  
  const construir = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.construido = true
        // Ya se resolvio mi promesa
        if(muro.construido){
          resolve(muro) // -> me ahorro return, es un return -> then recibe esto
        } else {
          reject(new Error("No se pudo construit")) // catch recibe esto
        }
      }, 3000)
    })
  }
  const aplanar = (muro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.aplanado = true
        // -> Logica negativa
        if(!muro.aplanado){ // -> no se cumple
          reject(console.log("No se pudo aplanar")) // -> re
          return
        } 
        // Continuamos
        resolve(muro)
      },3000)
    })
  }
  
  const pintar = (muro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.pintado = true
        // -> Logica negativa
        if(!muro.pintado){ // -> no se cumple
          reject(new Error("No se pudo pintar"))
          return
        } 
        // Continuamos
        resolve(muro)
      },3000)
    })
  }
  
  // Sintaxis
  
  // async va al principio, antes de la palabra reservada function
  async function main() {
   //.....
  
  }
  
  // Arrow functions
  // async va antes de los parentesis.
  const arrowF = async (muro) => {
    //... Aqui hay una promesa
    // await construir(muro) // -> solo la quiero ejecutar
    const muroConstruido = await construir(muro)
    console.log("muroConstruido", muroConstruido)
    const muroAplanado = await aplanar(muroConstruido)
    console.log("muroAplanado", muroAplanado)
    const muroPintado = await pintar(muroAplanado)
    console.log("muroPintado", muroPintado)
  
  }
  
  // Ejecutando nuestra funcion async
  arrowF({...muro})