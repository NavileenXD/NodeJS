//Este módulo facilita la Portabilidad del sistema

const path = require('path') //se coloca en una constante ya que no se tiene pensado cambiar la información almacenada en el módulo

console.log(path) //muestra todas las funciones disponibles en el módulo path
console.log(path.sep) //muestra el símbolo de separación del sistema actual

const FilePath = path.join('/public', 'dist', 'styles', 'main.css') //junta lo que se coloque por parámetro para ser usado como directorio
console.log(FilePath) 

console.log(path.basename(FilePath)) //permite extraer la base de una url 

console.log(path.dirname(FilePath)) //permite extraer la ruta o carpeta sin el archivo

console.log(path.parse(FilePath)) //permite extraer la información de la ruta en formato objeto para facilitar la extracción de info específica

console.log(path.resolve('dist')) // Ayuda a completar la ruta desde la carpeta base 
