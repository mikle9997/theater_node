const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mikle94h_theater'
});

function getAll() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from news order by date DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getThreeLast() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from news order by date DESC limit 3;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getById( id ) {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from news where id = ' + id + ' order by date DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

module.exports = {
    getAll,
    getThreeLast,
    getById
};