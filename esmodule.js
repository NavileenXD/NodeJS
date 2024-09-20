import math from './math/index.js'
import {add, substract, divide, multiply} from './math/index2.js'
// const math = require('./math/math.js') Lo de arriba es un equivalente a esto

console.log(math.add(10, 20)) //Con index.js
console.log(add(10, 20)) //Este es con index2.js

// Cabe destacar que no fue usado math.js sino index js porque en math está "module.exports = {}" pero este no es un estándar válido para importar con import. En cambio, en index.js, se declara como "export default {}" y de esta forma funciona el import

//Otra forma de exportar se encuentra en index2.js