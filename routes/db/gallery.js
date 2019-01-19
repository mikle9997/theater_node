const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mikle94h_theater'
});

function getImages() {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * from gallery order by id DESC;', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    });
}

module.exports = {
    getImages
};
