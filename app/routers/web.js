const clientesModel = require('../models/clientesModel')();

// const cliente = require('../models/clientesModel')()


module.exports = function(app){
     app.get('/contato',function(req,res){
     res.render("site/contato");
  });
  
    app.get('/',function(req,res){
    clientesModel.all(function(err, resultado){
      res.render("site/home", {clientes:resultado});
    });
    
  });

}