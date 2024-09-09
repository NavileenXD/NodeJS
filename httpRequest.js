// módulo que sirve para crear nuestra aplicación de servidor
const http = require('http')


http.createServer((request, response) => {
    //obtiene la información de la petición del cliente al servidor
    //console.log(request) 
    console.log(request.url) 

    if(request.url === '/about'){ //se logra entrar a este condicional si escribimos en el buscador /about al final del enlace
        response.write('acerca de...')
        return response.end() //con esto logramos que termine la ejecución en este paso
    }
    response.write('Hi hi gente')
    response.end()
}).listen(3000) //3000 es el puerto donde se ejecuta el servidor

console.log('Servidor escuchando desde el puerto 3000')