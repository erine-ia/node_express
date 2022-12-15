const mysql = require('mysql')

const cone = function(){
  return mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'root',
  database:'curso_node',
 
})

}

module.exports = cone