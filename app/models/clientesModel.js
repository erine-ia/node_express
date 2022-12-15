const db = require('../../config/db')



module.exports = function(){
    this.all = function(retorno){
        var conexao = db()
      

        return  conexao.query('select * from clientes', retorno)
        
        
    }

    return this

}