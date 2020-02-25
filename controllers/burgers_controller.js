const express = require ("express");
const burger = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
        /* mod needed was name: "sleepy"*/
      "name", "devour"
    ], [
       /* mod needed: was req.body.sleepy */ 
      req.body.name, req.body.devour
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
        /* mod needed was req.body.sleepy */
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
  
    console.log("condition", condition);
  
    burger.delete(condition, function(result) {
      if (result.affectedRows === 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      });
    });
  
  // Export routes for server.js to use.
  module.exports = router;
  