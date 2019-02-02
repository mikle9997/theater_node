const query = require('./query');

function getById( post ) {
    const sql_req = 'select * from many_news_has_many_media where news = ' + post + ' order by id DESC;';
    return query.requset( sql_req );
}
function addMedia( post, media ) {
    const sql_req = "insert into many_news_has_many_media " +
     + "(`news`, `media`) values ( '" + post + "' ,'" + media + "' );";
     return query.requset( sql_req );
 }
function deleteMedia( post, media ) {
    const sql_req = "delete from many_news_has_many_media where news = " + post + " and media =" + media;
    return query.requset( sql_req );
}

module.exports = {
    getById,
    addMedia,
    deleteMedia
};
