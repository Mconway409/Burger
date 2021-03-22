const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  let devoured = 0;
  if (req.body.devoured === "true") {
    devoured = 1;
  }
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, devoured],
    function (result) {
      console.log(result);
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

console.log("test", req.body)

  burger.update(req.params.id,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


module.exports = router;
