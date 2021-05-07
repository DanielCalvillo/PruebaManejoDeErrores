module.exports.segundoManejoDeError = (nombre) => {
    try {
        if (nombre === "Daniel") {
            throw new Error("Hola Daniel c:, Adios >:c")
        } else {
            throw new Error("Tu no eres Daniel!!!!! >:c")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}