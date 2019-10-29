// folder of models
// express
// controllers
// middleware

// function(req, res) = (req, res) =>

const express = require('express');
const router = express.Router();

// body parser - used for testing post request via terminal
const bodyParser = require('body-parser')
router.use(bodyParser.json());

router.get('/', function(req, res){
  res.json({
    status: "API WORKING",
    message: "HERE IS THE API MESSAGE"
  });
});

router.post('/', function(req, res){
  console.log(req.body);
  res.send({ message : 'ok'})
});

module.exports = router;