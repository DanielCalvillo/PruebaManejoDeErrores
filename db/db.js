const { segundoManejoDeError } = require('../services/service')

module.exports.manejoDeErrorFirst = (numero) => {
    try {
        if (numero === 2) {
            segundoManejoDeError("JOSE")
            return "Resuelto con éxito"
        } else {
            console.log("Este no es un dooos >:c")
            throw new Error("Este no es un doooooos >:c")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}