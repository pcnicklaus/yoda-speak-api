var express = require('express');
var router = express.Router();
var request = require('request');
var unirest = require('unirest');
// var yoda = require('yodaSpeak')

router.get('/', function(req, res, next) {

var Request = unirest.get("https://yoda.p.mashape.com/yoda?sentence=You%20will%20learn%20how%20to%20speak%20like%20me%20someday.%20%20Oh%20wait.")
  .headers({ "X-Mashape-Authorization": ""})
  .end(function (response) {
    console.log("Yoda says... " + response.body);
  });
});

// router.post('/yoda', function(req, res, next) {
//     var YodaSpeak = require('yoda-speak');
//     var yoda = new YodaSpeak('pbeqHTMDeXmshSRT79TnAQc4dMgop1FMS13jsnFS3ohXrW3Ffb');

//     yoda.convert("I'm really happy for you, and I'm going to let you finish, but this is the best Node package of all time.",
//     function(err, result) {
//         if (!err) {
//             console.log(result.toString());
//         } else {
//             console.log(err);
//         }
//     });

// });


// curl --get --include 'https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.' \
//   -H 'X-Mashape-Key: pbeqHTMDeXmshSRT79TnAQc4dMgop1FMS13jsnFS3ohXrW3Ffb' \
//   -H 'Accept: text/plain'

module.exports = router;
