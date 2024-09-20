const {readFile}= require('fs')  //con {} podemos definir exclusivamente las funciones que necesitamos

//La función normal tiene esta estructura, la cual se vuelve más grande y tediosa a medida que se agregan cosas.
/*
readFile('./data/first.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data)
})
*/


//Para que pueda ser más reutilizable y escalable el código:

const getText = (pathFile) => { //Función con promesa
    return new Promise(function(resolve, reject){
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err)
            }
            resolve(data)
        })
    })
}



getText('./data/first.txt') //En este caso es más mantenible que el anterior
    .then((result) => console.log(result)) //then se ejecuta cuando no hay error
    .then(() => getText('./data/third.txt'))
    .then(result => console.log(result))
    .then(() => getText('./data/fourth.txt')) //no existe
    .then(result => console.log(result))
    .then(() => getText('./data/five.txt')) //no existe
    .then(result => console.log(result))
    .catch((error) => console.log(error)) //atrapa el primer error, lo muestra y finaliza la ejecución