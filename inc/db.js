const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    database: 'vroomfood',
    password: '1234'
   // multipleStatements: true
});

module.exports = connection;