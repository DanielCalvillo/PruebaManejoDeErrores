//Importamos los módulos
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const { manejoDeErrorFirst } = require('./db/db')
//Iniciar nuestro servidor

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
})

//Inicializamos nuestros repositorios

app.get('/', (req, res) => {
    let respuesta = {
        codigo: 200,
        error: false,
        message: 'Punto de inicio de la APP'
    }
    res.send(respuesta)
});


app.get('/productos', (req, res) => {
    try {
        manejoDeErrorFirst(3)
    } catch (error) {
        let errorFinal = {
            error: error.message,
            message: "Ésta función me dio el error esperado"
        }
        res.send(errorFinal)
    }
})