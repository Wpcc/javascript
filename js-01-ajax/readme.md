## 说明
ajax的学习需要后台服务器的配合，故该项目的后台服务器搭建是基于node的express框架

01-XMLHttpRequest：

javascript中原生提供的ajax，包括核心对象`XMLHttpRequest`，以及该对象提供的两个方法`open(methods,url,async)`以及`send()`

```javascript
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    if(readystate == 4 && status ==200){
        //TODO
    }
}
xhr.open(methods,url,async)
xhr.send()
```



02-jquery：

准确来讲应该是jquery中的ajax，主要设计到三个方面：对于原生ajax的封装，提供表单序列化，对于jsonp的封装。

- 原生ajax封装

```javasc
$.ajax({
    type:'',  //请求类型	
    url:'',	//请求地址
    data:'',	//发送的数据：jquery对数据有一定封装，故该数据支持对象以及表单类型
    dataType:'',	//设定服务端数据类型，从而确定客服端对该数据类型的解析
    success:function(data){},
    error:function(err){}
})
```

```javascript
$.get(url,[data],[fn],[type])
$.post(url,[data],[fn],[type])

/*
url:待载入页面的URL地址
data:待发送 Key/value 参数。
callback:载入成功时回调函数。
type:返回内容格式，xml, html, script, json, text, _default。
*/
```

- 表单序列化

  当用ajax传递表单数据的时候，并不能直接和页面表单提交一样可以直接拿到表单中的数据，故jquery提供表单序列化方法，可以通过该方法将表单中的数据序列化成表单类型。

```javascript
$('form').serialize()
```

- jsonp

  在现实开发过程中，往往都涉及到数据请求的跨越，而jsonp就是通过script标签传递给服务器一个回调函数，从而实现跨越请求。

  ```javascript
  $.ajax({
      type:'',
      url:'',
      dataType:'jsonp',
      success:function(data){},
      error:function(err){}
  })
  ```

- CORS

  除了jsonp这种方法，W3C在后续中也提出了CORS方案，即 Corss-Origin Resource Sharing（跨域资源共享）。

  目前FIrefox3.5+，Safari4+，Chrome，IOS版Safari和Android平台中的Webkit都通过XMLHttpRequest对象实现了对CORS的原生支持。

  IE8.0中实现的对象XDR（XDominaRequest）。

  ```javascript
  // 在请求的跨域资源中（服务器）,只需要在响应头部写下如下参数即可
  header('Access-Control-Allow-Origin:*');
  header('Access-Control-Allow-Methods:POST,GET');
  ```
