const query = require('./query');

function getAll() {
    const sql_req = 'select * from actors order by id DESC;';
    return query.requset( sql_req );
}
function getById( id ) {
    const sql_req = 'select * from actors where id = ' + id + ' order by id DESC;';
    return query.requset( sql_req );
}
function insertActor( name, secname, role, img ) {
    const sql_req = "insert into actors (`name`, `secname`, `role`, `img`) " +
    "values ( '" + name + "' ,'" + secname + "' ,'" + role + "' ,'" + img + "' );";
    return query.requset( sql_req );
}
function deleteActor( id ) {
    const sql_req = "delete from actors where id = " + id;
    return query.requset( sql_req );
}
function updateActor( id, name, secname, role, img ) {
    const sql_req = "update actors set " +
    "`name`='" + name + "', `secname`='" + secname + "', `role`='" + role + "', `img`='" + img + "' " +
    "where id = " + id;
    return query.requset( sql_req );
}

module.exports = {
    getAll,
    insertActor,
    deleteActor,
    getById,
    updateActor
};