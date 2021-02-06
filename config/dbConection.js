var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com o DB estabelecida.');

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin123@',
        database: 'portal_noticias'
    });
};

module.exports = function(){
    console.log('O AutoLoad corregou a conexão do DB.');
    return connMySQL;
};