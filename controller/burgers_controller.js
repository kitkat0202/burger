var express = require("express");
var router = express.Router();
var burger = require("../model/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


router.post("/api/burger", function(req, res) {
    burger.create( req.body.burger_name, function(result) {
        res.status(200).end();
    });
});


router.put("/api/burger/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;