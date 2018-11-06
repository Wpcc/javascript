## 正则表达式

正则表达式（Regular Expression）是一种文本模式，使用单个字符来描述、匹配一系列匹配某个语法规则的字符串。

可视化网址：<https://regexper.com/>



### 1.0.js中的正则

你可以通过字面量或者构造函数的方法去构建正则表达式：

- 字面量

```javascript
var reg = /\bis\b/; //b(word boundary):字符边界
```

- 构造函数

```javascript
var reg = new RegExp('\\bis\\b');  //反斜杠需要转义
```

基础知识：

- 修饰符
  - g：global 全文搜索，不添加，搜索到第一个匹配停止
  - i：ignore case 忽略大小写，默认大小写敏感
  - m：multiple lines 多行搜索