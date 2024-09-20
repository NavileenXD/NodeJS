/*  //Ejemplo práctico para entender la delegación de tareas en nodejs
console.log("first")
setTimeout(() => {
    console.log("second") 
}, 0)
console.log("third")

//A pesar de que se podría pensar que el resultado sería first - second - third, la realidad no es así
//ya que al definirse un setTimeout le indica a node que es una tarea pendiente, por lo que la delega para que se ejecute como en segundo plano mientras él continua con lo que viene.

*/

const http  = require('http')

const server= http.createServer((req, res) => { //req = request  y res = response
    if (req.url === '/'){
        res.write(' Welcome to my land ')
        return res.end()
    }

    if (req.url === '/about'){
        //blocking code = a este bucle for, que puede ser cualquier otra tarea pesada, se le conoce
        //con el nombre de blockin code ya que javascript trabaja con hilos, y en caso de ejecutarse este bloque
        //y queremos acceder a la dirección localhost:3000/ este va a quedar en espera hasta que este bloque 
        //se termine de ejecutar
        for(let i=0; i < 100000; i++){
            console.log(Math.random()*i)
        }

        //El blocking code se puede evitar con el uso de código asíncrono
        return res.end(' About page ') //otra forma de respuesta comparada a la anterior
    }

    return res.end(' Page not found')
}) 


server.listen(3000)
console.log('Server on port 3000')