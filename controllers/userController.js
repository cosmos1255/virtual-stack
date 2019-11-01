const { Users } = require('../models/users')
const { BusinessCard } = require('../models/BusinessCard')
const mongoose = require("mongoose")

exports.getUser = async function(req, res){

    await Users.find({}, function(err, doc){
        if(err)
            console.log(err)
        
        res.send(doc)
        res.send('Hello World!');
        console.log("Does the console.log work?")
    })   
}
