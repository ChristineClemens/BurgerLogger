//Define npm dependencies.
const mysql = require("mysql");
require("dotenv").config();

function connectDB() {
    if (process.env.JAWSDB_URL) {
        return mysql.createConnection(process.env.JAWS_DB)
        } else {
            return mysql.createConnection({
            connection = mysql.createConnection({
                host: "localhost",
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PWD,
                database: process.env.DB_NAME,
                insecureAuth : true
            })
        });
    };
};

function close(connection) {
    return new Promise( ( resolve, reject ) => {
        connection.end( err => {
            if ( err )
                return reject( err );
            resolve();
        });
    });
};

module.exports = {connectDB, close};