const db = require('../../config/db')



module.exports = function(){
    this.all = function(retorno){
        var conexao = db()
        return  conexao.query('select * from clientes', retorno)
          
    }

    this.find = function(id, retorno){
        var conexao = db()
        return  conexao.query('select * from clientes where id = ?', id, retorno)
          
    }


    return this

}