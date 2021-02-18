function NoticiasDAO(connection){
    this._connection = connection;
}
//Consulta todas as notícias e exibe no site
NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
};

//Retorna a notícia que foi clicada e exibe em uma outra página
NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback)
};

//Salva a notícia cadastrada pelo colaborador
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback)
};

//Consulta as 5 ultimas notícias que são apresentadas na home do site
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);    
};

module.exports = function(){
    return NoticiasDAO;
};