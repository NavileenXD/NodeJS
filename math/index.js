//Primer Módulo

function add(x,y){
    return x + y
}

function substract(x,y){
    return x - y
}

function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}

function Sumcuadrado(x,y){
    return x*x + y*y
}

export default { //De esta forma podremos exportar las funciones a otros archivos y usarlos
    Sumcuadrado,
    add, 
    substract,
    multiply,
    divide
}