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
function insertPost( name, text, date, img ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "insert into news (`title`, `text`, `date`, `img`) values ( '" + name + "' ,'" + text + "' ,'" + date + "' ,'" + img + "' );";
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}
function deletePost( id ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "delete from news where id = " + id;
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}
function updatePost( id, name, text, date, img ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "update news set " +
        "`title`='" + name + "', `text`='" + text + "', `date`='" + date + "', `img`='" + img + "' " +
        "where id = " + id;
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    getAll,
    getThreeLast,
    getById,
    insertPost,
    deletePost,
    updatePost
};