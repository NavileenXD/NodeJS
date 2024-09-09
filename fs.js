
const fs = require('fs')

const firstFile = fs.readFileSync('./data/first.txt') //leerá el archivo de la ruta especificado
console.log("Archivo crudo") 
console.log(firstFile) //devuelve el txt en formato crudo (un Buffer)


//---------------

const firstFile2 = fs.readFileSync('./data/first.txt', 'utf-8') //leerá el archivo de la ruta especificado, convirtiendolo a utf-8 o String normal
console.log("Archivo convertido a utf-8") 
console.log(firstFile2)

//---------------

//Otra forma de convertirlo
console.log("Con toString") 
console.log(firstFile.toString())



//-*-*-*-*--*-*-*

fs.writeFileSync('./data/third.txt', 'tercer archivo de prueba jeje') //Sirve ara crear archivos en el directorio especificado con el contenido especificado

const title = "Este es otro contenido jeje"
fs.writeFileSync('./data/third.txt', title) //reescribe sobre el primero

//si no queremos que se sobre escriba:
fs.writeFileSync('./data/third.txt', title, {flag: 'a'}) //a de append