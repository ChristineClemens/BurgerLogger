//Define npm dependencies.
const mysql = require("mysql");
require("dotev").config();

function connectDB () {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8080,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        insecureAuth : true
    });
    return connection;
}

function close(connection) {
    return new Promise( ( resolve, reject ) => {
        connection.end( err => {
            if ( err )
                return reject( err );
            resolve();
        });
    });
}

module.exports = {connectDB, close};