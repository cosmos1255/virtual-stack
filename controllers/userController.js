const { Users } = require('../models/users')
const { BusinessCard } = require('../models/BusinessCard')
const mongoose = require("mongoose")

exports.getUser = function(req, res){
    Users.find({}, function(err, user) {
        if(err)
        {
            res.send(err);
        }
        res.json(user)
        console.log(res.json)
    })
}
