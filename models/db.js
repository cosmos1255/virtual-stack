// A contact schema
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blake:1234@cluster0-2n09e.mongodb.net/Manager?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) { 
      console.log('Error in DB connection : ' + error) 
    } else {
      console.log('MongoDB Connection Succeeded.') 
    }
});

module.exports = mongoose;
