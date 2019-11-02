const express = require("express");
const router = express.Router();

const { Users } = require("../models/users");
const mongoose = require('mongoose')

// body parser - used for testing post request via terminal
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// fake controller
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

// get all user info
router.get("/user/:id", async function(req, res) {
  try {
    var users = await Users.findById(req.params.id)
    res.send(users);
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

// get list of user's business cards
router.get("/user/:id/list", async function(req, res){
  try{
    var list = await Users.findById(req.params.id)
    res.send(list.listBC)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// get other people names
router.get("/user/:id/names", async function(rq, res){
  try{
    var names = await Users.findById(req.params.id)
    res.send(listBC.name)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// get user's business card
router.get("/user/:id/card", async function(req, res){
  try {
    var bc =  await Users.findById(req.params.id)
    res.send(bc.businessCard)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// update user's business card
router.put('/user/:id', async function(req, res){
  try{
    var conditions = { _id: req.params.id }
    var update = { "$set": {"businessCard": businessCard} }
    Users.findOneAndUpdate(conditions, update)
  }
  
  catch (err){
    res.send({ error: err.message})
  }
})

// signup
router.post("/signup", async function(req, res) {
  try {
    const user = new Users({
      username: req.body.username,
      password: req.body.password,
      businessCard: {
        id: new mongoose.Types.ObjectId()
      },
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
    Users.findOne({ 'username': req.body.username }, function(err, user) {
      if (!user) console.log("User not found");

      user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) throw err;

        if (!isMatch) console.log("Wrong password");

        console.log("logged Successfull");
        res.send("Horray")
        
      });
    });
  } 
  catch (err) {
    res.send({ error: err.message });
    console.log("Error has occured");
  }
});

// Note: function(req, res) = (req, res) =>

module.exports = router;
