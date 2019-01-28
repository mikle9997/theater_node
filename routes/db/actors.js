const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection(config.db);

function getAll() {
    return new Promise ((resolve, reject) => {
        connection.query('select * from actors order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getById( id ) {
    return new Promise ((resolve, reject) => {
        connection.query('select * from actors where id = ' + id + ' order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function insertActor( name, secname, role, img ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "insert into actors (`name`, `secname`, `role`, `img`) values ( '" + name + "' ,'" + secname + "' ,'" + role + "' ,'" + img + "' );";
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}
function deleteActor( id ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "delete from actors where id = " + id;
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}
function updateActor( id, name, secname, role, img ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "update actors set " +
        "`name`='" + name + "', `secname`='" + secname + "', `role`='" + role + "', `img`='" + img + "' " +
        "where id = " + id;
        connection.query(sql_req, function (error, results) {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    getAll,
    insertActor,
    deleteActor,
    getById,
    updateActor
};