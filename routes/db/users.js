const query = require('./query');

function getAll() {
    const sql_req = 'select * from users order by id DESC;';
    return query.requset( sql_req );
}
function getById( id ) {
    const sql_req = 'select * from users where id = ' + id + ' order by id DESC limit 1;';
    return query.requset( sql_req );
}
function getByLogin( login ) {
    const sql_req = 'select * from users where login = "' + login + '" order by id DESC limit 1;';
    return query.requset( sql_req );
}
function createUser( login, password ) {
    const sql_req = "insert into users (`login`, `password`) values ( '" + login + "' ,'" + password + "' );";
    return query.requset( sql_req );
}

module.exports = {
    getAll,
    getById,
    getByLogin,
    createUser
};