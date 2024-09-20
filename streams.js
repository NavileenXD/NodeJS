
/*
//Creamos un archivo grande para este caso de estudio
const {writeFile} = require('fs/promises')

const createBigFile = async() => {
    await writeFile('./data/bigfile.txt', 'hello world again'.repeat(1000000)
    )
}

createBigFile()
*/

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile2.txt', 'utf-8')

stream.on('data', (chunk) => { //Divide en trozos el archivo que se le pasó y lo va imprimiendo por pedazos
    console.log(chunk)
})

stream.on('end', () => { //Se ejecuta al terminar de leer el archivo
    console.log('Ya terminé de leer el archivo')
})

stream.on('error', (error) => { //Se ejecuta e caso de un error
    console.log(error)
})