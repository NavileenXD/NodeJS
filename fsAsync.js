
const fsAsync = require('fs')

//Cuando no se lee Sync, ya podemos asumir que se trata de una ejecución asíncrona

fsAsync.readFile('./data/first.txt', 'utf-8', function(error, data){ //esa función es típica de javascript, y permite ejecutarse al finalizar la ejecución de este proceso
    if(error){
        console.log(error)
    }
    console.log(data)
})
