// modulo de OS
const os = require('os') 

console.log(os.userInfo()) //devuelve un objeto con información del sistema
console.log(os.uptime()) //muestra el tiempo transcurrido de inicio a fin de la ejecución
console.log(os.platform()) //muestra la plataforma/sistema operativo
console.log(os.totalmem()) //muestra la memoria ram total
console.log(os.freemem()) // muestra la memoria ram disponible

//creamos una tabla para mostrar info relevante del sistema

console.table({
    os: os.platform(),
    "OS Version": os.release(),
    "Total Memory": os.totalmem()
})