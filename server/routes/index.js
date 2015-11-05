var express = require('express');
var router = express.Router();
var request = require('request');
var unirest = require('unirest');
var config = require('../_config');
var async = require('async');
// var yoda = require('yodaSpeak')

var path = require('path');

exports.index = function (req, res) {
  res.render('index');
};


exports.yoda = function (req, res) {

    console.log('in route');
    var text = req.body.me;

    text = escape(text);
    console.log(text);
    unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + text + ".")
        .headers({
            "X-Mashape-Authorization": config.MASHAPE_KEY
        })
        .then(function (response) {
            console.log(response);
        })
        .end(function (response) {
            console.log("Yoda says... " + response.body);
        });

};


module.exports = router;


// var Request = unirest.get("https://yoda.p.mashape.com/yoda?sentence=You%20will%20learn%20how%20to%20speak%20like%20me%20someday.%20%20Oh%20wait.")

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
