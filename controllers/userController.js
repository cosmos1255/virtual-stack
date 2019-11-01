const { Users } = require('../models/users')
const { BusinessCard } = require('../models/BusinessCard')
const mongoose = require("mongoose")

exports.getUser = function(req, res){

    Users.find({}, function(err, doc){
        if(err)
            console.log(err)
        
        res.send(doc)
        res.send('Hello World!');
        console.log("Does the console.log work?")
    })   
}
