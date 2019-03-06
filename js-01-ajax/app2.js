var express = require('express')
var app = express()

app.get('/jsonp',function(req, res){
  res.jsonp({
    status:0,
    msg:'jsonp数据正常'
  })
})

app.get('/cors',function(req, res){
  res.set({
    'Access-Control-Allow-Origin':'http://127.0.0.1:3000',
    'Access-Control-Allow-Methods':'POST,GET'
  })
  res.json({
    status:0,
    msg:'cors数据正常'
  })
})

app.listen('8080',function(){
  console.log('app2 is running');
})
