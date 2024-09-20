const {readFile}= require('fs/promises')  //Se accede a la promesa con /promises

/*
//Esto lo usábamos para usar Promisify, pero al evolucionar nodejs, se han ido implementando las promesas dentro de dichos módulos
const {promisify}= require('util')  
const readFilePromise = promisify(readFile) 
*/


async function read() {
    try {
        const result = await readFile("./data/first.txt", 'utf-8');
        console.log(result);
        const result2 = await readFile("./data/second.txt", 'utf-8');
        console.log(result2);
        throw new Error ("Esto es un error inesperado"); //Manera de crear los propios errores
        //Se ve que luego del Error, no se ejecuta lo demás.
        const result3 = await readFile('./data/fourth.txt', 'utf-8');
        console.log(result3);
    } catch (error) {
        console.log(error);
        
    }
}
read()
