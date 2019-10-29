const mongoose = require('./db');

const UsersSchema = new mongoose.Schema({
    id: String, 
    username: String,
    password: String,
    email: String
    // user business cards
    // list of business cards 

})