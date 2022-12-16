
const clientesModel = require('../models/clientesModel')()

module.exports.index = function(req, res){
    clientesModel.all(function(err, resultado){
            res.render("site/home", {clientes:resultado});
      });
}

module.exports.store = function(){
    
}


module.exports.show = function(){
    
}