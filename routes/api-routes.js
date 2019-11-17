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
router.get("/user", async function(req, res) {
  var username = req.headers.username

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
router.get("/user/list", async function(req, res){
  try{
    var username = req.headers.username
  
    var list = await Users.findOne({username})
    res.send(list.listBC)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// get other people names
router.get("/user/names", async function(rq, res){
  try{
    var username = req.headers.username
  
    var names = await Users.findOne({username})
    res.send(listBC.name)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// get user's business card
router.get("/user/card", async function(req, res){
  try {
    var username = req.headers.username
    var bc =  await Users.findOne({username})
    res.send(bc.businessCard)
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// update user's business card
router.put('/user/card', async function(req, res){
  try{
    var username = req.headers.username
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
router.delete('/user/list', async function(req, res){
  try{
    var username = req.headers.username
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
router.post('/user/list', async function(req, res){
  try
  {
    var username = req.headers.username
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
