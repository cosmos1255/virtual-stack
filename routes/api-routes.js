const express = require("express");
const router = express.Router();

const { Users } = require("../models/users");

// controller for later
// const userController = require("../controllers/userController");

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

// middleware
const logging = function(req, res, next) {
  console.log("logging");
  next();
};

router.get("/", logging, controller);

router.post("/", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

// get other business cards
router.get("/list", async function(req, res) {
  try {
    var users = await Users.find();
    var names = await Users.find({}, "businessCard");
    res.send(names);
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

// signup
router.post("/signup", async function(req, res) {
  try {
    const user = new Users({
      username: req.body.username,
      password: req.body.password,
    });

    await user.save();
    res.send(user);
  } 
  catch (err) {
    res.send({ error: err.message });
  }
});

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
