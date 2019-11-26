var express = require('express');
var app = express();

const apiRoutes = require("./routes/api-routes");

// setup static files
app.use(express.static('public', { dotfiles: 'allow' }));
app.use(express.static('node_modules', { dotfiles: 'allow' }));

var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api', apiRoutes);

app.listen(process.env.PORT || port, function () {
  console.log('Example app listening on port ' + port);
});

// https://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of