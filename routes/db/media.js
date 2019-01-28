const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection(config.db);

function getGallery() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from media where type_of = "gallery" order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getActors() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from media where type_of = "actor" order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getNews() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from media where type_of = "news" order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function insertData( img, type_of ) {
    return new Promise ( (resolve, reject) => {
        const sql_query = "insert into media (`img`, `type_of`) values ( '" + img + "' ,'" + type_of + "' );";
        connection.query( sql_query, function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function deleteImg( id ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "delete from media where id = " + id;
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    getGallery,
    getActors,
    getNews,
    insertData,
    deleteImg
};
