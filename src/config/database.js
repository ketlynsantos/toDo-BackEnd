//Abre a conexão com o mongo e manda os comandos para la
//O mongoose tem uma api que reflete a do MongoDB
const mongoose = require('mongoose')
const moongose = require('mongoose')
//Api do mongoose vai usar a propria api do node
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')

