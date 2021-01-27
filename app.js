var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><Body><h3>Portal de Noticias</h3></body></html>");
})

app.listen(3000, function(){
    console.log("Servidor do express rodando na porta 3000");
});