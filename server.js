
var express = require('express');
var app = express();

const apiRoutes = require("./routes/api-routes");

var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req, res){
    res.json({
        status: "API WORKING",
        message: "HERE IS THE API MESSAGE"
      });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});