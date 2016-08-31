var express = require('express'),
    hamlJS = require('hamljs')
var app = express();

app.engine('.haml', hamlJS.renderFile);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000);
