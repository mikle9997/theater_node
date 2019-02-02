const query = require('./query');

function getAll() {
    const sql_req = 'select * from news order by date DESC;';
    return query.requset( sql_req );
}
function getLast( num ) {
    const sql_req = 'select * from news order by date DESC limit ' + num;
    return query.requset( sql_req );
}
function getById( id ) {
    const sql_req = 'select * from news where id = ' + id + ' order by date DESC;';
    return query.requset( sql_req );
}
function getFav() {
    const sql_req = "select * from news where fav = 1 order by date DESC limit 1;";
    return query.requset( sql_req );
}
function createPost( name, author, text, date, time, duration, place, producer, choreographer, actors, img ) {
    const sql_req = "insert into news (`title`, `author`, `text`, `date`, `time`, `duration`, `place`, `producer`, `choreographer`, `actors`, `img`) " +
                    "values ( '" + name + "' ,'" + author + "' ,'" + text + "' ,'" + date + "' ,'" + time + "' ,'" + duration + "' ,'" + 
                    place + "' ,'" + producer + "' ,'" + choreographer + "' ,'" + actors + "' ,'" + img + "' );";
    return query.requset( sql_req );
}
function deletePost( id ) {
    const sql_req = "delete from news where id = " + id;
    return query.requset( sql_req );
}
function updatePost( id, name, author, text, date, time, duration, place, producer, choreographer, actors, img ) {
    const sql_req = "update news set " +
    "`title`='" + name + "', `author`='" + author + "', `text`='" + text + "', `date`='" + date + "', `time`='" + time + "', `duration`='" +
    duration + "', `place`='" + place + "', `producer`='" + producer + "', `choreographer`='" + choreographer + 
    "', `actors`='" + actors + "', `img`='" + img + "' " +
    "where id = " + id;
    return query.requset( sql_req );
}
function getBetween( limit, offset ) {
    const sql_req = 'select * from news order by date DESC limit ' + limit + ' offset ' + offset + ';';
    return query.requset( sql_req );
}

module.exports = {
    getAll,
    getLast,
    getById,
    createPost,
    deletePost,
    updatePost,
    getFav,
    getBetween
};