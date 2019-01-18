const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mikle94h_theater'
});

function getAfishaAll() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from afish2 order by date DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

function getAfishaThreeLast() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from afish2 order by date DESC limit 3;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

function getAfishaAll() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from afish2 order by date DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

function getAfishaById( id ) {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from afish2 where id = ' + id + ' order by date DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

function getTroupe() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from trupa order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

module.exports = {
    getAfishaAll,
    getAfishaThreeLast,
    getTroupe,
    getAfishaById
};