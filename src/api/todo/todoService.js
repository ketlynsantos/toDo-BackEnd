const Todo = require('./todo')

//todos os métodos que serão habilitados 
//(mostrar,adicionar, alterar e deletar)
Todo.methods(['get', 'post', 'put', 'delete'])
//Validando atualizações e mostrando dados atualizados
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo