var connection = require("./connection.js");


const orm = {
  selectAll: (table, cb) => {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (table, column, value, cb) => {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    
    connection.query(queryString, [table, column, value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: (id, cb) => {
    var queryString = `UPDATE burgers SET devoured = true WHERE id = ${id}`;
    connection.query(queryString, (err, res) => {
      console.log("update" + queryString);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
};

module.exports = orm;
