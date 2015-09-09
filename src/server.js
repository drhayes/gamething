'use strict';

var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 8080);
app.engine('html', require('ejs').renderFile);

app.get('/js/game.js', browserify(path.join(__dirname, 'game.js')));

app.get('/', function(req, res) {
  res.render('sync.html');
});

app.use(express.static(path.join(__dirname, '../public/')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening at http://localhost:%s', port);
});
