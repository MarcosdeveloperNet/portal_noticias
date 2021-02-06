//var dbConection = require('../../config/dbConection');

module.exports = function(app){

    app.get('/noticias', function(req, res){

        var connection = app.config.dbConection();
        
        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticia", {noticias : result});
        });
    });

};