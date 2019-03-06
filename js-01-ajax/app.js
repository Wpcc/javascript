var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use('/public',express.static('./public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 路由：数据请求处理
app.get('/original',function(req, res){
  var data = {
    status:'0',
    msg:'this is original'
  }
  res.json(data)
})
app.get('/jquery', function(req, res){
  var data = {
    status:'0',
    msg:'this is jquery'
  }
  res.json(data)
})
app.post('/serialize', function(req, res){
  var data = req.body
  var result = {
    status:'0',
    msg:'收到数据'
  }
  res.json(result)
})
app.listen('3000',function(){
  console.log('app is running');
})
