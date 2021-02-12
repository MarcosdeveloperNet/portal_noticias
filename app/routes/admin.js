module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req, res){
            res.render("admin/form_add_noticia", {validacao: {}});
        });
        application.post('/noticia/salvar', function(req, res){
            var noticia = req.body;

        //Validações do formulário
        req.assert('titulo', 'O título da notícia é obrigatório.').notEmpty();
        req.assert('resumo', 'O resumo da notícia é obrigatório.').notEmpty();
        req.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres.').len(10, 100);
        req.assert('autor', 'O autor da notícia é obrigatório.').notEmpty();
        req.assert('data_noticia', 'A data da notícia é obrigatória.').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'A notícia é obrigatório.').notEmpty();

        var erros = req.validationErros();
            if(erros){
                res.render("admin/form_add_noticia", {validacao : erros});
                    return;
            };

        var connection = application.config.dbConection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}