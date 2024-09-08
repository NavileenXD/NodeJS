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

 