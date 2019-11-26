const express = require("express");
const router = express.Router();
<<<<<<< HEAD
=======
const atob = require('atob')
>>>>>>> master

const { Users } = require("../models/users");
const mongoose = require('mongoose')

<<<<<<< HEAD
=======
// const auth = require('../middleware/auth')

>>>>>>> master
// body parser - used for testing post request via terminal
const bodyParser = require("body-parser");
router.use(bodyParser.json());

<<<<<<< HEAD
// fake controller
=======
// testing fake controller
>>>>>>> master
const controller = function(req, res) {
  res.json({
    status: "API IS WORKING",
    message: "HERE IS AN API MESSAGE"
  });
};

// testing middleware
const logging = function(req, res, next) {
  console.log("logging");
  next();
};

// testing get function
router.get("/", logging, controller);

// testing post function
router.post("/", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

<<<<<<< HEAD
// get all user info
router.get("/user", async function(req, res) {
  var username = req.headers.username
=======
// auth middleware
const auth = async function(req, res, next){
  try{
    const [type, encodedCredentials] = req.header("Authorization").split(' ')
    const [username, password] = atob(encodedCredentials).split(':')

    const user = await Users.findOne({
      username,
      password
    })

    if(!user){
      res.send("Cannot find user")
    }
    req.auth = { username }
    next();
  }
  catch(err){
    next(err)
  }
}

// get all user info
router.get("/user",auth, async function(req, res) {
  var username = req.auth.username
  console.log(username)
>>>>>>> master

  try {
    const user = await Users.findOne({username})
    console.log(user)
    res.json(user)
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

// get list of user's business cards
<<<<<<< HEAD
router.get("/user/list", async function(req, res){
  try{
    var username = req.headers.username
=======
router.get("/user/list",auth, async function(req, res){
  try{
    var username = req.auth.username
>>>>>>> master
  
    var list = await Users.findOne({username})
    res.send(list.listBC)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// get other people names
<<<<<<< HEAD
router.get("/user/names", async function(rq, res){
  try{
    var username = req.headers.username
=======
router.get("/user/names", auth, async function(rq, res){
  try{
    var username = req.auth.username
>>>>>>> master
  
    var names = await Users.findOne({username})
    res.send(listBC.name)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// get user's business card
<<<<<<< HEAD
router.get("/user/card", async function(req, res){
  try {
    var username = req.headers.username
=======
router.get("/user/card", auth,  async function(req, res){
  try {
    var username = req.auth.username
>>>>>>> master
    var bc =  await Users.findOne({username})
    res.send(bc.businessCard)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// update user's business card
<<<<<<< HEAD
router.put('/user/card', async function(req, res){
  try{
    var username = req.headers.username
=======
router.put('/user/card', auth, async function(req, res){
  try{
    var username = req.auth.username
>>>>>>> master
    const user = await Users.findOne({username})

    console.log(user.businessCard)
    console.log(req.body)

    user.businessCard = req.body
    await user.save()

    res.send(user.businessCard)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// delete a business card
<<<<<<< HEAD
router.delete('/user/list', async function(req, res){
  try{
    var username = req.headers.username
=======
router.delete('/user/list',auth,  async function(req, res){
  try{
    var username = req.auth.username
>>>>>>> master
    const user = await Users.findOne({username})

    user.listBC.pull(req.body)
    await user.save()
    res.json(req.body)

  }
  catch (err){
    res.send({ error: err.message})
  }
})

// add a business card
<<<<<<< HEAD
router.post('/user/list', async function(req, res){
  try
  {
    var username = req.headers.username
=======
router.post('/user/list', auth,  async function(req, res){
  try
  {
    var username = req.auth.username
>>>>>>> master
    const user = await Users.findOne({username})

    console.log(user)
    console.log("here is the req body " + req.body)

    user.listBC.push(req.body)
    await user.save()
    res.json(req.body)
  }
  catch(err)
  {
    res.send({error: err})
  }
<<<<<<< HEAD

=======
>>>>>>> master
})

// signup
router.post("/signup", async function(req, res) {
  try {
    const user = new Users({
      username: req.headers.username,
      password: req.headers.password,
      businessCard: {
        id: new mongoose.Types.ObjectId()
      },
      dateCreated: Date.now()
    });
    await user.save();
    res.send(user);
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

// signin
router.post("/signin", function(req, res) {
  try {
    var username = req.headers.username
    var password = req.headers.password
    Users.findOne({ username }, function(err, user) {
      if (!user) 
        res.send("User has not been found");

      user.comparePassword(password, function(err, isMatch) 
      {
        if (err) 
          throw err;

        if (!isMatch) 
          res.send("wrong password")
        
        console.log("logged Successfull");
        res.send("Horray")
        
      });
    });
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

module.exports = router;
