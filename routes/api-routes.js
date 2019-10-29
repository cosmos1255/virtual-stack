// folder of models
// express
// controllers
// middleware

const express = require('express');
const router = express.Router();

// function(req, res) = (req, res) =>

router.get('/', function(req, res){
    res.json({
        status: "API WORKING",
        message: "HERE IS THE API MESSAGE"
      });
});

router.post('/', function(req, res){
  console.log(req.body)
  res.send({ message : 'ok'})
});

module.exports = router;