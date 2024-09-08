//Primer módulo
const mathFunctions = require('./math/math')

//Imprime las funciones almacenadas en module.exports
console.log(mathFunctions)
console.log("")

//Usando las funciones
console.log(mathFunctions.add(10,40))
console.log(mathFunctions.substract(10,40))
console.log(mathFunctions.multiply(10,40))
console.log(mathFunctions.divide(10,40))
console.log(mathFunctions.Sumcuadrado(10,40))

/*
//CommonJS Modules
require('./module/myModule') //exporta el archivo my module y lo ejecuta

const web = require('./module/myModule') //almacena solamente el valor de las constantes MyWebAddress
console.log("")
console.log("")
console.log("Constante")
console.log(web) //la constante puede ser cualquier tipo de variable (int, strings, listas, objetos, etc)

const webGroup = require('./module/myModules') 
console.log("")
console.log("")
console.log("Grupo de Constantes")
console.log(webGroup)

//También puede accederse a un campo del grupo en particular
console.log(webGroup.myArray)
*/

 