const {readFile}= require('fs')  


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



//Para no usar la función y colocar .then y .catch en todo momento tenemos async-await

async function read() {
    try {
        const result = await getText("./data/first.txt");
        console.log(result);
        const result2 = await getText("./data/second.txt");
        console.log(result2);
        throw new Error ("Esto es un error inesperado"); //Manera de crear los propios errores
        //Se ve que luego del Error, no se ejecuta lo demás.
        const result3 = await getText('./data/fourth.txt');
        console.log(result3);
    } catch (error) {
        console.log(error);
        
    }
}
read()