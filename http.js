// módulo que sirve para crear nuestra aplicación de servidor
const http = require('http')
const { createServer } = require('http2')

http.createServer(function(request, response){
    response.write('Hi hi gente')
    response.end()
}).listen(3000) //3000 es el puerto donde se ejecuta el servidor

console.log('Servidor escuchando desde el puerto 3000')

//Si se coloca en el buscador del navegador http://localhost:3000 se podrá ver la respuesta del servidor