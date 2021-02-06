const noticiasModel = require("../models/noticiasModel");

module.exports = function(application){

    application.get('/noticia', function(req, res){

        var connection = application.config.dbConection();
        var noticiasModel = application.app.models.noticiasModel;
        
        noticiasModel.getNoticia(connection, function(error, result){
            res.render("noticias/noticia", {noticia : result});
        });
    });

};