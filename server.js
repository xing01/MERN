const express = require('express')
const app =express()

//Importar conexion MongoDB
const archivoBD = require('./conexion')


app.get('/', (req, res) => {
    res.end('Bienvenido al servidor backend node.js corriendo...')
})

//Configuración de server básico
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})