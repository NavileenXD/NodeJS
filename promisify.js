const {readFile}= require('fs')  
const {promisify}= require('util')  

const readFilePromise = promisify(readFile) //Esta línea de código es lo mismo que el siguiente bloque de código

/*
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
*/


//Para no usar la función y colocar .then y .catch en todo momento tenemos async-await

async function read() {
    try {
        const result = await readFilePromise("./data/first.txt", 'utf-8');
        console.log(result);
        const result2 = await readFilePromise("./data/second.txt", 'utf-8');
        console.log(result2);
        throw new Error ("Esto es un error inesperado"); //Manera de crear los propios errores
        //Se ve que luego del Error, no se ejecuta lo demás.
        const result3 = await readFilePromise('./data/fourth.txt', 'utf-8');
        console.log(result3);
    } catch (error) {
        console.log(error);
        
    }
}
read()
