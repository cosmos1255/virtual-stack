const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

// body parser - used for testing post request via terminal
const bodyParser = require('body-parser')
router.use(bodyParser.json());

// fake controller
const controller = function(req, res){
  res.json({
    status: "API IS WORKING",
    message: "HERE IS AN API MESSAGE"
  })
}

// middleware
const logging = function(req, res, next){
  console.log('logging')
  next()
}

router.get('/', logging, controller)

router.post('/', function(req, res){
  // console.log(req.body);
  res.send(req.body)
});

router.get('/login', userController.getUser)

router.get('/list', controller);


// Note: function(req, res) = (req, res) =>

module.exports = router;
