const mongoose = require('./db');

const BusinessCard = new mongoose.Schema({
    id : String,
    name: 
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    phoneNumber:
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    }
})

module.export = BusinessCard