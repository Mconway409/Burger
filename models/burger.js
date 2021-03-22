const orm = require("../config/orm.js");

const burgers = {
  all(cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update(id, cb) {
    orm.updateOne(id, function (res) {
      cb(res);
    });
  },

};

module.exports = burgers;
