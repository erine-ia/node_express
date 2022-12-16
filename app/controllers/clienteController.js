
const clientesModel = require('../models/clientesModel')()

module.exports.index = function(req, res){
    clientesModel.all(function(err, resultado){
            res.render("site/home", {clientes:resultado});
      });
}

module.exports.store = function(){
    
}


module.exports.show = function(req, res){
      clientesModel.find(req.params.id, function(err, resultado){

            if(resultado[0] && err){
               res.render("site/detalhe", {clientes:resultado[0]});   
            }else{
                  console.log('Esse cliente não existe');
                  res.redirect('/')
            }
            
      });
    
}