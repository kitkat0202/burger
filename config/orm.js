var connection = require("../config/connection.js");

var orm = {
    selectAll: (cb) => {
        connection.query(`SELECT * FROM burgers`,function(err, result) {
            if (err) throw err;
            cb(result);
          });
    },
    insertOne: (val, cb) => {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", val, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (id, cb) => {
        connection.query(`UPDATE burgers SET devoured=true WHERE id=${id}`, function(err, result) {
            if (err) throw err;
            cb(result);
          });
    }
}
module.exports = orm;