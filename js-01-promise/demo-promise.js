var fs = require('fs');
var promise = new Promise(function(resolve,reject){
  fs.readFile('example.txt',{encoding:'utf-8'},function(err,data){
    if(err){
      reject(err);
      return;
    }
    resolve(data);
  })
})
promise.then(function(data){
  console.log(data);
})
