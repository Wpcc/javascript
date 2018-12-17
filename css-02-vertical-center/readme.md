## 文件说明
- position+margin:
+ 当父元素的高度和宽度是固定的时候，利用position和margin可以实现元素的垂直居中
+ 该方案的缺点在于margin的数据依赖于子元素的宽高。这是由于margin的百分比是父元素的数据的百分比

- position+transform:
+ 当父元素的高度和宽度都不固定的时候，利用position+transform便可以实现元素垂直居中
+ 这是因为transform的百分比是基于改变元素的宽高数值

- flex
+ 当父元素的高度和宽度都不固定的时候，利用flex（流动布局）便可以实现元素的垂直居中
+ 原因在于flex会将元素流式的显示在页面上。
