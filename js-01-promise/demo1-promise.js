var fs = require('fs');
// 函数封装
function readFile(filename){
  return new Promise(function(resolve,reject){
    fs.readFile(filename,{encoding:'utf-8'},function(err,data){
      if (err) {
          return reject && reject(err);
      }
      resolve(data);
    })
  })
}
// promise链式调用
readFile('example1.txt')
.then(function(data){
  console.log(data);
  return readFile('example2.txt');
})
.then(function(data){
  console.log(data);
  return readFile('example3.txt');
})
.then(function(data){
  console.log(data);
})
