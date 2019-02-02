const query = require('./query');

function getGallery() {
    const sql_req = 'SELECT * from media where type_of = "gallery" order by id DESC;';
    return query.requset( sql_req );
}
function getActors() {
    const sql_req = 'SELECT * from media where type_of = "actor" order by id DESC;';
    return query.requset( sql_req );
}
function getNews() {
    const sql_req = 'SELECT * from media where type_of = "news" order by id DESC;';
    return query.requset( sql_req );
}
function insertData( img, type_of ) {
    const sql_req = "insert into media (`img`, `type_of`) values ( '" + img + "' ,'" + type_of + "' );";
    return query.requset( sql_req );
}
function deleteImg( id ) {
    const sql_req = "delete from media where id = " + id;
    return query.requset( sql_req );
}
function getById( id ) {
    const sql_req = 'select * from media where id = ' + id + ' order by id DESC limit 1;';
    return query.requset( sql_req );
}

module.exports = {
    getGallery,
    getActors,
    getNews,
    insertData,
    deleteImg,
    getById
};
