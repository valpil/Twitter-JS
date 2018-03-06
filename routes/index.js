const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets} );
});

router.get('/tweets/:id', function(req, res, next) {
  var tweetsWithId = tweetBank.find( {id: Number(req.params.id)} );
  res.render( 'index', { tweets: tweetsWithId });
})

// console.log(users);
// console.log(tweetBank.find('Nimit Ecma'));

module.exports = router;
