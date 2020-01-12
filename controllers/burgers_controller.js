const express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    burger.create(["name"], [req.body.name, req.body], function(res){
        res.json({id: SpeechRecognitionResult.insertId});
    });
});