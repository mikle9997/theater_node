const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mikle94h_theater'
});

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

module.exports = {
    getGallery,
    getActors,
    getNews
};
