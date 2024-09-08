let mySecretValue = "xyz456" //es una variable que no es visible para la constante group en el main.js ya que no se guardó en module.exports

const MyWebAddress = "google.com"
const MyNumber = 9
const MyArray = [10 , 20, 30]
const user = {
    name: 'Nadine',
    lastname: 'Chan'
}

const group = {
    myWebAddress : MyWebAddress,
    myNumber: MyNumber,
    myArray: MyArray,
    user: user
}


module.exports = group

