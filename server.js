var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));


app.get('/',function (req, res) {
  res.render('index', { title : 'Platzigram' })
});
app.get('/signup', function (req, res) {
  res.render('index', { title : 'Platzigram | signup' })
});
app.get('/signin', function (req, res) {
  res.render('index', { title : 'Platzigram | signin' })
});
app.get('/api/pictures', function(req,res){
  var pictures = [
    {
      user:{
        username:'david',
        avatar:'office.jpg',
      },
      url:'office.jpg',
      likes: 0,
      liked: false,
      createdAt:new Date()
    },
    {
      user:{
        username:'david',
        avatar:'office.jpg',

      },
      url:'office.jpg',
      likes: 3,
      liked: false,
      createdAt:new Date().setDate(new Date().getDate()-10)
    },

  ];
  setTimeOut(function (){
    res.send(pictures);
  }, 2000)
})
port = 3000;
app.listen(port, function (err) {
  if (err) return console.log("Something happend"), process.exit(1);
  console.log('The magic happens on port: '+ port);
});
