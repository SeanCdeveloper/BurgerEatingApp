const express = require ("express");
const burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devour"
    ], [
      req.body.burger_name, req.body.devour
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.update({
      devour: req.body.devour
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
      if (result.affectedRows === 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      });
    });
  
  module.exports = router;
  