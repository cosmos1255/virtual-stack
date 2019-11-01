var express = require('express');
var app = express();

const apiRoutes = require("./routes/api-routes");

var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api', apiRoutes);

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});