

module.exports = function(){
    const body_parser = require('body-parser')
    const express = require('express')
    const app = express()

    app.set('view engine', 'ejs')
    app.set('views', './app/views')

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended: true}))

    const rotas = require('../app/routers/web');
    rotas(app)
    
    app.listen(8000,function(){
        console.log("localhost:8000");
      })
}