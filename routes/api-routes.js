const express = require("express");
const router = express.Router();
const atob = require('atob')

const { Users } = require("../models/users");
const mongoose = require('mongoose')

// body parser - used for testing post request via terminal
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// testing fake controller
const controller = function(req, res) {
  res.json({
    status: "API IS WORKING",
    message: "HERE IS AN API MESSAGE"
  });
};

// testing get function
router.get("/", controller);

router.get("/test", controller)

// testing post function
router.post("/", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

// auth middleware
const auth = async function(req, res, next){
  try{
    const [type, encodedCredentials] = req.header("Authorization").split(' ')
    const [username, password] = atob(encodedCredentials).split(':')

    const user = await Users.findOne({
      username
    })

    if(!user){
      res.status(401).send("Username / Password is invaild")
    }

    user.comparePassword(password, function(err, isMatch){
      if(err)
        console.log(err)
      if(!isMatch)
        res.send("Username / Password is invaild")
    })
    req.auth = { username }
    req.pass = { password }
    next();
  }
  catch(err){
    next(err)
  }
}

// auth for signup
const authsignup = async function(req, res, next){
  try{
    const [type, encodedCredentials] = req.header("Authorization").split(' ')
    const [username, password] = atob(encodedCredentials).split(':')

    req.auth = { username }
    req.pass = { password }
    next();
  }
  catch(err){
    next(err)
  }
}

// get all user info
router.get("/user",auth, async function(req, res) {
  try {
    var username = req.auth.username
    const user = await Users.findOne({username})
    res.json(user)
  } 
  catch (err){
    res.send({error: err.message})
  }
});

// get list of user's business cards
router.get("/user/list",auth, async function(req, res){
  try{
    var username = req.auth.username
    var list = await Users.findOne({username})
    res.json(list.listBC)
  }
  catch (err){
    res.send({error: err.message})
  }
})

// get other people names
router.get("/user/names", auth, async function(req, res){
  try{
    var username = req.auth.username
  
    var user = await Users.findOne({username})
    var names = []
    for(let userobj of user.listBC)
    {
      names.push(userobj.name) 
    }
    res.send(names)
  }
  catch (err){
    res.send({error: err.message})
  }
})

// get user's business card
router.get("/user/card", auth,  async function(req, res){
  try {
    var username = req.auth.username
    var user =  await Users.findOne({username})
    res.send(user.businessCard)
  }
  catch (err){
    res.send({error: err.message})
  }
})

// get other user's business card
router.get("/user/person", auth , async function(req, res){
  try{
    var username = req.auth.username
    var body = req.body
    var user =  await Users.findOne({username})
    var person = user.listBC.find(element => element,body)
    res.send(person)
  }
  catch (err){
    res.send({error: err.message})
  }
})

// update user's business card
router.put('/user/card', auth, async function(req, res){
  try{
    var username = req.auth.username
    
    var user = await Users.findOne({username}, function(err, card){
      if(req.body.name)
        card.update({"businessCard.name": req.body.name}).exec()

      if(req.body.address)
        card.update({"businessCard.address": req.body.address}).exec()

      if(req.body.phoneNumber)
        card.update({"businessCard.phoneNumber": req.body.phoneNumber}).exec()
      
      if(req.body.email)
        card.update({"businessCard.email": req.body.email}).exec()

      if(req.body.occupation)
        card.update({"businessCard.occupation": req.body.occupation}).exec()
    })
    res.send("User's card was updated")
    // const doc = {
    //   name: {
    //     first: req.body.name.first,
    //     last: req.body.name.last
    //   },
    //   address: req.body.address,
    //   phoneNumber: req.body.phoneNumber,
    //   email: req.body.email,
    //   occupation: req.body.occupation
    // }
    // user.updateOne({businessCard: ops}, doc, function(err, raw) {
    //   if (err) {
    //     res.send(err);
    //   }
    //   res.send(raw);
    // })
    // await user.save()
    // res.send("testing")
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// delete a business card
router.delete('/user/list',auth,  async function(req, res){
  try{
    var username = req.auth.username
    const user = await Users.findOne({username})
    const body = req.body
    var person = user.listBC.find(element => element,body)
    user.listBC.pull(person)
    await user.save()
    res.send("User successfully deleted")
  }
  catch (err){
    res.send({ error: err.message})
  }
})

// add a business card
router.post('/user/list', auth,  async function(req, res){
  try
  {
    var username = req.auth.username
    const user = await Users.findOne({username})

    const person = {
      id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      occupation: req.body.occupation,
      dateCreated: Date(Date.toLocaleString())
    }

    user.listBC.push(person)
    await user.save()
    res.json(person)
  }
  catch(err){
    res.send({error: err.message})
  }
})

// signup
router.post("/signup", authsignup, async function(req, res) {
  try {
    const user = new Users({
      username: req.auth.username,
      password: req.pass.password,
      businessCard: {
        id: new mongoose.Types.ObjectId()
      },
    });
 
    user.businessCard = req.body
    await user.save();
    res.send(user);
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

// signin
router.post("/signin", auth, function(req, res) {
  try {
    res.status(200).send("Signin has been successful")
  } 
  catch (err) {
    res.status(401).send({ error: err.message });
  }
});

module.exports = router;
