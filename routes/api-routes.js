const express = require('express');
const router = express.Router();

const {Users} = require('../models/users')

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
  console.log(req.body);
  res.send(req.body)
});

// router.get('/login', async function(req, res, next){
//   Users.find({}, function(err, doc){
//     if (err) { return res.json({error: err})}
//     if (!doc) {return res.json({doc: 'none'})}
//     return res.send(doc)
//   })
// })

router.get('/login', async function(req, res){
  try{
    var users = await Users.find()
    var names = await Users.findOne({}, 'businessCard')
    res.send(names)
    
  } catch(err){
    res.send({error: err.message})
  }
})

router.get('/list', controller);

// Note: function(req, res) = (req, res) =>

module.exports = router;
