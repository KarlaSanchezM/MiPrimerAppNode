const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'sql3.freemysqlhosting.net',
        user: 'sql3330848',
        password: 'PABT42d4xD',
        database: 'sql3330848'
    });
}