const http = require("http")

const server = http.createServer((request, response) => {
    //Escribiendo
    //response.write("Hola desde mi servidor, hola mundo")
    console.log("url", request.url)
    console.log("method", request.method)
    //response.write("Hola desde mi servidor, hola mundo")

    const { url, method } = request
    console.log("url", url)
    console.log("method", method)

    //Estructura de datos
    const endpoints = {
        GET: {
            "/hola": "GET en /hola"
        },
        POST:{
            "/hola": "POST en /hola"
        },
        PATCH: {
            "/hola": "PATCH en /hola"
        },
        DELETE: {
            "/hola": "DELETE en /hola",
            "/adios": "DELETE en /adios"
        }
    }
    response.write(endpoints[method][url])


    /*
    if(method === "GET" && url === "/hola"){
        response.write("get en /hola")
    }
    if(method === "POST" && url === "/hola"){
        response.write("post en /hola, aqui podemos insertar")
    }
    if(method === "PATCH" && url === "/hola"){
        response.write("patch en /hola, aqui podemos actualizar")
    }
    if(method === "DELETE" && url === "/hola"){
        response.write("delete en /hola, aqui podemos eliminar")
    }
    
    if(method === "DELETE" && url === "/adios"){
        response.write("delete en /adios, aqui podemos eliminar")
    }*/
    //Acabar
    response.end()
})

// Listening
// 1 - Port
// 2 - Callback
server.listen(8080, () => {
    console.log("Mi servidor está escuchando")
})          