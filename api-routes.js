const express = require('express');
const router = express.Router();

// body parser - used for testing post request via terminal
const bodyParser = require('body-parser')
router.use(bodyParser.json());

// middleware
const logging = function(req, res, next){
  console.log('logging')
  next()
}

router.get('/', logging,  function(req, res){
  res.json({
    status: "API WORKING",
    message: "HERE IS THE API MESSAGE"
  });
});

router.post('/', function(req, res){
  // console.log(req.body);
  res.send(req.body)
});

// Note: function(req, res) = (req, res) =>

module.exports = router;