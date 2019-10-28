// folder of models
// express
// controllers
// middleware

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.json({
        status: "API WORKING",
        message: "HERE IS THE API MESSAGE"
      });
});

module.exports = router;