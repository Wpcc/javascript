var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('user',function(req,res){
  // 读取数据
  fs.readFile('./user.json',function(err,data){
    if(err){
      res.end(err);
      return;
    }
    res.end(data.toString());
  })
})
server.on('profession',function(req,res){
  // 读取数据
  fs.readFile('./user.json',function(err,data){
    if(err){
      res.end(err);
      return;
    }
    res.end(data.toString());
  })
})
server.listen('3000',function(){
  console.log('app is running');
})
