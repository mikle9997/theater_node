const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection(config.db);

function getAll() {
    return new Promise ((resolve, reject) => {
        connection.query('select * from users order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getById( id ) {
    return new Promise ((resolve, reject) => {
        connection.query('select * from users where id = ' + id + ' order by id DESC limit 1;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
}
function getByLogin( login ) {
    return new Promise ((resolve, reject) => {
        const sql_req = 'select * from users where login = "' + login + '" order by id DESC limit 1;';        
        connection.query( sql_req, (error, results, fields) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
}
function createUser( login, password ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "insert into users (`login`, `password`) values ( '" + login + "' ,'" + password + "' );";
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    getAll,
    getById,
    getByLogin,
    createUser
};