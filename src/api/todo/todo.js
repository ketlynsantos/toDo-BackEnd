const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    //Descrição da tarefa - string e obrigatória
    description: { type: String, required: true },
    //Booleano mostrando se a tarefa foi realizada ou não - obrigatório tambem
    done: { type: Boolean, required: true, default: false },
    //Data do registro da tarefa
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)