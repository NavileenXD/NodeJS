const MyWebAddress = "google.com"

console.log("Module antes del cambio")
console.log(module)
console.log("")

module.exports = MyWebAddress

console.log("Module después del cambio")
console.log(module)