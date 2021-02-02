var dbConection = require('../../config/dbConection');

module.exports = function(app){

    var connection = dbConection();

    app.get('/noticias', function(req, res){

        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticia", {noticias : result});
        });
    });
};