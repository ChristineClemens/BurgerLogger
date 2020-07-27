const {connectDB, close} = require("../config/connection");

class DB {
    constructor(burgers_db) {
        this.connection = connectDB(burgers_db);
    }
    selectAll(tableName) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM ??", [tableName], function (err, rows) {
                console.log("GIMME. Please.");
                if (err) reject(err);
                resolve(rows);
            });
        });
    }

    insertOne(tableName, value) {
        return new Promise((resolve, reject) => {
            this.connection.query("INSERT INTO ?? SET ?", [tableName, value], function (err, rows) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }

    updateOne(tableName, column, update, id) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tableName, column, update, id], function (err, rows) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }

    removeOne(tableName, id) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM ?? WHERE id = ?", [tableName, id], function (err, rows) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }

    closeConnection() {
        return close(this.connection);
    }
};

module.exports = DB;
