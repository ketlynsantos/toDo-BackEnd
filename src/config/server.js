// Startar o servidor e alocar uma porta
const port = 3003

const bodyParser = require('body-parser')
// Servidor web que roda em cima do node
const express = require('express')
//Startando
const server = express()

//Sempre que chegar uma requisição que usa esse padrão
//UrlEncoded, padrão usado pra submição de formularios
// quem vai fazer o parser é o proprio body Parser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BackEnd is running on port ${port}.`)
})
