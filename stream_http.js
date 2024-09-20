const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res) //esto hace que el dato, la cual en este caso es el chunk de todo el texto, se pase a otra función, en este caso a la función res (response)
    })

    fileStream.on('error', (error) => { //Se ejecuta e caso de un error
        console.log(error)
    })
})

server.listen(3000)
console.log('server on port ${3000}')