

module.exports = function(){
    const express = require('express')
    const app = express()

    app.set('view engine', 'ejs')
    app.set('views', './app/views')

    const rotas = require('../app/routers/web');
    rotas(app)
    
    app.listen(8000,function(){
        console.log("localhost:8000");
      })
}