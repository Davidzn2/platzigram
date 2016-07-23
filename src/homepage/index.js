var page = require('page');
var empty = require('empty-element');
var template = require('./template')
var title = require('title');

page('/', function(ctx, next){
  title('Platzigram');
  var main = document.getElementById('main-container')
  var pictures = [
    {
      user:{
        username:'david',
        avatar:'office.jpg',

      },
      url:'office.jpg',
      likes: 0,
      liked: false
    },
    {
      user:{
        username:'david',
        avatar:'office.jpg',

      },
      url:'office.jpg',
      likes: 0,
      liked: false
    },

  ];

  empty(main).appendChild(template(pictures));
})
