const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection(config.db);

function getById( post ) {
    return new Promise ((resolve, reject) => {
        const sql_req = 'select * from many_news_has_many_media where news = ' + post + ' order by id DESC;';
        connection.query(sql_req, (error, results, fields) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function addMedia( post, media ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "insert into many_news_has_many_media (`news`, `media`) values ( '" + post + "' ,'" + media + "' );";
        connection.query(sql_req, (error, results, fields) => {
            if (error) return reject(error);
            resolve();
        });
    });
}
function deleteMedia( post, media ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "delete from many_news_has_many_media where news = " + post + " and media =" + media;
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    getById,
    addMedia,
    deleteMedia
};
