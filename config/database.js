const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'sc-p.mysql.database.azure.com',
    user: 'HBO@sc-p',
    password: 'Uno234$67',
    database: 'recursoshumanos'
});

pool.query = util.promisify(pool.query);
module.exports = pool;