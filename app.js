var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormulario = require('./app/routes/formulario')(app);

app.listen(3000, function(){
    console.log("Servidor On");
});