const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'Etakarai1988',
    database: 'sistema_magnata'
})

module.exports = conexao