## 项目说明

### 前言

执行栈和执行上下文说明：https://zhuanlan.zhihu.com/p/48590085

js执行机制（even loop）：

​	https://juejin.im/post/59e85eebf265da430d571f89

​	https://zhuanlan.zhihu.com/p/33087629

### 执行栈

**执行栈：**

​	简而言之，应该是内存开辟出来的一块执行代码的栈空间，也就是满足(last in first out)。之所以这样，是因为代码的执行往往会依赖于上级作用域的变量或函数。（具体参考前言链接）



**执行上下文：**

​	从代码的层面来看，应该就是作用域中的所有代码。

### 事件循环示意图

​	事件队列中的顺序应该是异步请求执行完毕之后的顺序。（具体意思可参考demo02）

​	即：如果将其中一个宏任务设置为3秒之后执行，就算该任务在队列之前，依旧会在完成后推入到执行栈中。

![01](C:\Users\Administrator\Desktop\javascript\01-js执行机制\readme\01.jpg)