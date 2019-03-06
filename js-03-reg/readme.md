## 正则表达式

正则表达式（Regular Expression）是一种文本模式，使用单个字符来描述、匹配一系列匹配某个语法规则的字符串。

可视化网址：<https://regexper.com/>

练习网站：https://regexr.com/



### js中的正则

你可以通过字面量或者构造函数的方法去构建正则表达式：

- 字面量

```javascript
var reg = /\bis\b/; //b(word boundary):字符边界
```

- 构造函数

```javascript
var reg = new RegExp('\\bis\\b');  //反斜杠需要转义
```

### 基础知识

正则表达式由一些**普通字符**和一些**元字符**组成。普通字符包括大小写的字母和数字，而元字符则具有特殊的含义。

- 修饰符
  - g：global 全文搜索，不添加，搜索到第一个匹配停止
  - i：ignore case 忽略大小写，默认大小写敏感
  - m：multiple lines 多行搜索

- 括号
  + ()：分组，通过$num可以拿到分组匹配的值
  + []：字符集合。匹配所包含的任一一个字符。**如果^在[]中则代表取反。**
  + {}：限定符，用来限定字符出现的次数

- 转义符
  - /

- 行首行尾
  - ^ ：匹配输入字行首。如果设置了RegExp对象的Multiline属性，^也匹配"\n"或"\r"之后的位置。
  - $：匹配输入行尾。如果设置了RegExp对象的Multiline属性，$也匹配"\n"或"\r"之前的位置。

### 详解

范围类：

 - []
    - 通过[]的内部连写从而达到一种范围匹配，如[a-z]

预定义类：

- .	 \[^\r\n]	除了回车符和换行符之外的所有字符
- \d     [0-9]    数字字符
- \D    \[^0-9]    非数字字符
- \s    [\t\n\x0B\f\r]    空白符
- \S    \[^\t\n\x0B\f\r]    非空白符
- \w    [a-zA-Z_0-9]    单词字符（字母、数字下划线）
- \W    \[^a-zA-A_0-9]    非单词字符

边界：

- ^    以xxx开始
- $    以xxx结束
- \b    单词边界
- \B    非单词边界

量词：

- ？    出现零次或一次（最多出现一次）
- \+     出现一次或多次（至少出现一次）
- \*    出现零次或多次（任意次）
- {n}    出现n次
- {n,m}    出现n到m次
- {n,}    至少出现n次



### 方法

RegExp对象主要提供两个方法，一个是`exec()`另一个是`test()`。

当然字符串中的`match()`、`replace()`方法参数可以传入一个正则表达式。

```javascript
// exec()方法匹配会返回一个数组，没匹配则返回null
var text = 'mom and dad and baby'
var pattern = /mom( and dad( and baby)?)?/gi
var matches = pattern.exec(text)
console.log(matches)  //该方法较少用
```

```javascript
// test()方法会返回布尔值
var text = '000-00-0000'
var pattern = /\d{3}-\d{2}-\d{4}/
if(pattern.test(text)){
    console.log('The pattern was matched')
}
```



### 贪婪和非贪婪

正则在进行量词匹配的时候，会尽可能多的匹配，我们称这种模式为贪婪模式。

```javascript
//案例1
var str = '12345678';
var str1 = str.replace(/d{3,6}/g,'X');
console.log(str1);
//输出结果 X78

//案例2
var str = '<h1>hello world</h1>';
var str1 = str.replace(/<\w*>/,'X');
console.log(str1);
//输出结果 X
```

而让正则表达式尽可能少的匹配，也就是说一旦成功匹配不在继续尝试就是非贪婪模式。

```javascript
//案例1
var str = '12345678';
var str1 = str.replace(/d{3,6}?/g,'X');
console.log(str1);      
//输出结果 XX78
            
//案例2
var str = '<h1>hello world</h1>';
var str1 = str.replace(/<\w*?>/,'X')
console.log(str1);                       
//输出结果 Xhello world</h1>            
```

### 前瞻

- 正则表达式从文本头部向尾部开始解析，文本尾部方向称为“前”。
- 前瞻就是在正则表达式匹配到规则的时候，向前检查是否符合断言，后顾、后瞻方向相反。
- javascript并不支持后顾
- 符合和不符合特定断言称为**肯定/正向**匹配和**否定/负向**匹配

| 名称     | 正则           | 含义             |
| -------- | -------------- | ---------------- |
| 正向前瞻 | exp(?=assert)  |                  |
| 负向前瞻 | exp(?!assert)  |                  |
| 正向后顾 | exp(?<=assert) | javascript不支持 |
| 负向后顾 | exp(?<!assert) | javascript不支持 |

```javascript
// \w(?=\d)\
'a2*3'.replace(/w(?=\d)/g,'X');
// 输出 X2*3
```

### 实际用途

**手机号码：**

- 1开头+3/4/5/7/8+d

```javascript
var reg = /^1[3456789]\d{9}$/;
```



**email：**

- 第一部分：A-Z/a-z/0-9/_/-/.
- 第二部分：@ + a-z/A-Z/0-9/_/-/.
- 第三部分： . +A-Z/a-z  {2,4}

```javascript
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
```

