// A contact schema
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster-lhcly.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) { 
      console.log('Error in DB connection : ' + error) 
    } else {
      console.log('MongoDB Connection Succeeded.') 
    }
});

module.exports = mongoose;
