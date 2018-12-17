let fs = require('fs');
// 封装读取函数
function readFile(filename,callback){
  fs.readFile(filename,{encoding:'utf-8'},function(err,data){
    if(err){
      callback(err);
    }
    callback(null,data);
  })
}
// 回调地狱
readFile('example1.txt',function(err,data){
  if (err) {
    throw err;
  }
  console.log(data);
  readFile('example2.txt',function(err,data){
    if (err) {
      throw err;
    }
    console.log(data);
    readFile('example3.txt',function(err,data){
      if (err) {
        throw err;
      }
      console.log(data);
    })
  })
})
