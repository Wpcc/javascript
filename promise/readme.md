## promise
promise很容易理解，主要分两个部分。
- 第一个部分创建一个promise对象，该对象有两个参数，为回调函数，分别是resolve和reject。
  + 将异步操作放入promise对象当中，promise对象会立即执行内部代码。
  + 异步操作的正确处理结果传入到resolve回调函数，而错误处理结果传入到reject
- 第二个部分为调用部分
  - 调用then方法，该方法有的两个函数分别对应resolve和reject。
    - 如果then方法中resolve的返回值是promise对象，链式调用下的then便是promise对象的resolve方法。
    - 如果不是promise对象，那么链式调用下传入then中的resolve参数便是该数值。
  - 同样的不通过then，而通过catch方法也可以拿到传入reject中的参数。

以下代码对promise的第一部分进行了封装(node.js)：
```javascript
let fs = require('fs');
function readFile(filename){
  return new Promise(resolve,reject){
    // 异步操作
    fs.readFile(filename,function(err,data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  }
}
let promise = readFile('example.txt');
promise.then(function(data){
  console.log(data);
},function(err){
  console.log(err);
})
```
### 1.0.resolve 和 reject
对于Promise构造函数中的resolv和reject方法，Promise有两种定义处理：
- 第一种是在then中定义
  + 第一个参数定义的是resolve
  + 第二个参数定义的是reject
- 第二种
  + resolve在then中定义
  + reject在catch中定义
```javascript
let fs = require('fs');
function readFile(filename){
  return new Promise(resolve,reject){
    // 异步操作
    fs.readFile(filename,function(err,data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  }
}
let promise = readFile('example.txt');
promise.then(function(data){
  console.log(data);
});
promise.catch(function(err){
  console.log(err)
});
```
### 2.0.回调地狱（callback hell）
回调地狱的问题在于代码嵌套，如果有多个异步，嵌套在一起会导致代码冗杂，很难分清代码内容。
如以下代码：
```javascript
let fs = require('fs');
fs.readFile('example1.txt',function(err,data){
  if(err){
    throw err;
  }else{
    console.log(data);
    fs.readFile('example2.txt',function(err,data){
      if(err){
        throw err;
      }else{
        console.log(data);
        fs.readFile('example3.txt',function(err,data){
          if(err){
            throw err;
          }else{
            console.log(data);
          }
        })
      }
    })
  }
})
```
利用Promise可以减少这种代码嵌套，从而达到链式调用直观、简洁效果。换言之便是以长度换深度。
```javascript
let fs = require('fs');
// 封装异步读取代码
function readFile(filename){
  return new Promise(resolve,reject){
    fs.readFile(filename,function(err,data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  }
}
readFile('example1.txt').then(function(data){
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
```
### 3.0.实例
