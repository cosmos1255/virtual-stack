const bcrypt = require("bcrypt");
const SALT = 10;

const mongoose = require("./db");
const BusinessCard  = require('./BusinessCard')

const UsersSchema = new mongoose.Schema(
  {
    id: String,
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    businessCard: BusinessCard,
    listBC: [BusinessCard]
  },
  {
    // gets rid of _v: 0 in the database
    versionKey: false
  }
);

// stores password into a bcrypt hash when a user is created
UsersSchema.pre("save", function(next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
      });
    });
  }
  // goes to the next middleware
  else {
    next();
  }
});

// compares password to hash password from database 
UsersSchema.methods.comparePassword = function(candidatePassword,checkpassword){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return checkpassword(err);
    checkpassword(null, isMatch);
  });
};

module.exports = {
  // first paramater is then name, second is the schema, and third is the collection
  Users: mongoose.model("Users", UsersSchema, "Users")
};
