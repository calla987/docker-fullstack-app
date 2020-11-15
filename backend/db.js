const mysql = require('mysql');
// AWS RDB Connection
const pool = mysql.createPool({
    connectionLimit:10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.myapp,
});

exports.pool =pool;
