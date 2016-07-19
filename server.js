var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('index', { title : 'Platzigram' })
});
app.get('/signup', function (req, res) {
  res.render('index', { title : 'Platzigram | signup' })
});
app.get('/signin', function (req, res) {
  res.render('index', { title : 'Platzigram | signin' })
});
port = 3000;
app.listen(port, function (err) {
  console.log('The magic happens on port: '+ port);
});
