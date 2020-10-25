var nqb = require('node-querybuilder');
var mysql = require('mysql');

function connect() {
    const pool = new nqb({
        host: 'localhost',
        user: 'root',
        password: 'tjansry354',
        database: 'igeoneottae',
        port: '3306'
    }, 'mysql', 'pool');

    return pool.get_connection;
}


module.exports = connect;