const db = require('../../config/db')



module.exports = function(){
    this.all = function (){
      var conexao = db()
      conexao.query('select * from clientes', function(err, resultado){
        console.log(resultado)

      })
        return [{nome:"maria", email:"maria@live.com"}]
    }

  return this

}