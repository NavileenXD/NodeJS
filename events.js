const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data) => { //Este sirve para escuchar los eventos, y en este caso cuando escuche el evento response va a mostrar la data por consola
    console.log(data)
}) //Es como si se activara la escucha con esta función, y se ejecutará tantas veces como se reciba alguna respuesta

customEmitter.emit('response', 'Hello World') //Estos son los eventos response que recibe customEmitter con la función .on
customEmitter.emit('response', 30)
customEmitter.emit('response', [1, 2, 3])
customEmitter.emit('response', {name: "Nadine"})