const db = require("../config/connection");


// function createQMarks(number) {
//     var arr = [];
//     for(var i = 0; i < number; i++) {
//         arr.push("?");
//     } 
//     return arr.toString();
// };

// function translateSQL(object) {
//     var arr = [];
//     for (var key in object) {
//         var value = object[key];
//         if (Object.hasOwnProperty.call(object, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }

const orm = {
    selectAll(tableName) {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM ??', [tableName], (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    },

    insertOne(tableName, value) {
        return new Promise((resolve, reject) => {
            this.connection.query("INSERT INTO ?? SET ?", [tableName, value], function (err, rows) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    },

    updateOne(tableName, update, condition) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE ?? SET ? WHERE ?", [tableName, update, condition], function (err, rows) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    },

    removeOne(tableName, condition) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM ?? WHERE ?", [tableName, condition], function (err, rows) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }
};






