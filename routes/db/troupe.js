const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mikle94h_theater'
});

function getTroupe() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from trupa order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

module.exports = {
    getTroupe
};