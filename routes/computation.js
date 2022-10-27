var express = require('express');
var router = express.Router();
var url = require('url')
var querystring= require('querystring')
/* GET home page. */

router.get('/', function(req, res, next) {
  params = (url.parse(req.url)).query
values = new URLSearchParams(params)
x=values.get('x')
rand = Math.floor(Math.random()*1000)
 if(x){
  output =`Math.cos(${x}) is ${Math.cos(x)}`
  res.render('computation', { title: 'computation' ,output:output});
 }
 else{
  output =`Math.cos(${rand}) is ${Math.cos(rand)}`
  res.render('computation', { title: 'computation' ,output:output});
  
 }
});

module.exports = router;
