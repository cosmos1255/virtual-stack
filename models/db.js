// A contact schema
const mongoose = require('mongoose');

// 1. change user and passsword
// 2. change Business to collection name 
// 3. make sure IP is whitelisted
mongoose.connect('mongodb+srv://admin:admin@cluster-lhcly.mongodb.net/Business?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) { 
      console.log('Error in DB connection : ' + error) 
    } else {
      console.log('MongoDB Connection Succeeded.') 
    }
});

module.exports = mongoose;
