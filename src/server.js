'use strict';

var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 8080);
app.engine('html', require('ejs').renderFile);

app.get('/js/game.js', browserify(path.join(__dirname, 'game.js'), {
  transform: ['babelify']
}));

app.get('/', function(req, res) {
  res.render('game.html');
});

app.use(express.static(path.join(__dirname, '../public/')));

var server = app.listen(app.get('port'), function() {
  var address = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', address, port);
});
