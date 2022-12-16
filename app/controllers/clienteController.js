
const clientesModel = require('../models/clientesModel')()

module.exports.index = function(req, res){
    clientesModel.all(function(err, resultado){
            res.render("site/home", {clientes:resultado, erros:{}, dados:{}});
      });
}

module.exports.store = function(req, res){
    let dados = req.body;
    //REGRAS DE VALIDAÇÃO:
    req.assert('nome', 'Preencha com um Nome').notEmpty()
    req.assert('nome', 'O nome deve ter de 3 a 20 caracteres').len(3, 20)

    req.assert('email', 'Preencha com um email').notEmpty()
    req.assert('nome', 'Preencha com email válido').Email()

    var validacaoErros = req.validationErrors()

    if(validacaoErros){
      console.log(validacaoErros)
      clientesModel.all(function(erro, resultado){
            res.render('site/home', {clientes:resultado, erros:validacaoErros, dados:dados})
      })
      return;
    }


    clientesModel.save(dados, function(err, resultado){
      if(resultado[0] && !err){
            res.render("site/detalhe", {clientes:resultado[0]});   
         }else{
               console.log('Erro ao Adicionar cliente');
               res.redirect('/')
         }

    })
}


module.exports.show = function(req, res){
      clientesModel.find(req.params.id, function(err, resultado){

            if(resultado[0] && !err){
               res.render("site/detalhe", {clientes:resultado[0]});   
            }else{
                  console.log('Esse cliente não existe');
                  res.redirect('/')
            }
            
      });
    
}