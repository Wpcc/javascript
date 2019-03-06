## ES6语法

### symbol

当我们给一个对象定义一个方法或者属性的时候，往往存在覆盖的风险。所以在ES6中新增了一个类型Symbol，该类型的值是独一无二的，也就意味着如果值存在覆盖则会报错。

具体语法：

```javascript
var symbol = Symbol()
var obj = {
    [symbol]:'hello'
}
obj[symbol] = 'world'  //报错
//Symbol类型的值需要用[]进行读取。
```

