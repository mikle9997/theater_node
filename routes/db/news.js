const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection(config.db);

function getAll() {
    return new Promise ((resolve, reject) => {
        connection.query('select * from news order by date DESC;', (error, results, fields) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getLast( num ) {
    return new Promise ((resolve, reject) => {
        const sql_req = 'select * from news order by date DESC limit ' + num + ';';
        connection.query( sql_req, (error, results, fields) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getById( id ) {
    return new Promise ((resolve, reject) => {
        connection.query('select * from news where id = ' + id + ' order by date DESC;', (error, results, fields) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
}
function getFav() {
    return new Promise ((resolve, reject) => {
        const sql_req = "select * from news where fav = 1 order by date DESC limit 1;";
        connection.query( sql_req, (error, results, fields) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
}
function createPost( name, author, text, date, time, duration, place, producer, choreographer, actors, img ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "insert into news (`title`, `author`, `text`, `date`, `time`, `duration`, `place`, `producer`, `choreographer`, `actors`, `img`) " +
                        "values ( '" + name + "' ,'" + author + "' ,'" + text + "' ,'" + date + "' ,'" + time + "' ,'" + duration + "' ,'" + 
                        place + "' ,'" + producer + "' ,'" + choreographer + "' ,'" + actors + "' ,'" + img + "' );";
        connection.query(sql_req, (error, results) => {
            if (error) return reject(error);
            resolve();
        });
    });
}
function deletePost( id ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "delete from news where id = " + id;
        connection.query(sql_req, (error, results) => {
            if (error) return reject(error);
            resolve();
        });
    });
}
function updatePost( id, name, author, text, date, time, duration, place, producer, choreographer, actors, img ) {
    return new Promise ((resolve, reject) => {
        const sql_req = "update news set " +
                        "`title`='" + name + "', `author`='" + author + "', `text`='" + text + "', `date`='" + date + "', `time`='" + time + "', `duration`='" +
                        duration + "', `place`='" + place + "', `producer`='" + producer + "', `choreographer`='" + choreographer + 
                        "', `actors`='" + actors + "', `img`='" + img + "' " +
                        "where id = " + id;
        connection.query(sql_req, (error, results) => {
            if (error) return reject(error);
            resolve();
        });
    });
}

module.exports = {
    getAll,
    getLast,
    getById,
    createPost,
    deletePost,
    updatePost,
    getFav
};