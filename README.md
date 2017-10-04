# 思路
首先获取到滚动条距离顶部的大小 top， 计算出点击按钮后应该向上滚动的大小。应该是一个渐变的速度，故使用计时器，setInterval函数。从快到慢。并且要取整，可以任意取整。
其次就是要判断是否到达顶部。如果top已经等于0了，说明此时滚动条已经到达顶部了。现在我们需要clearInterval去清除定时器。
***
但是有一点是要注意的。假如说用户在回到顶部的时候突然想停下来浏览网页的话。此时我们也是需要停止定时器的。在这里就要用到onscroll事件。每一次滚动都会触发onscroll事件。因此我们应该在定时器中设置一个标志。flag=true。然后在onscroll事件中判断flag。判断flag为false的时候才停止定时器。同时也要监听用户是否滚动了滚轮。如果滚动了，依旧会触发onscroll事件。但是却没有触发定时器事件。故在用户触发onscroll事件的时候将flag=false。那么当定时器执行下次滚动的时候就触发到onscroll事件。此时flag=false，就会停止定时器。
# 用到的一些知识点
1. document.documentElement.scrollTop 在IE下获取滚动条距离顶部的大小； document.body.scrollTop 在Chrome下获取到滚动条距离顶部的大小。
2. window.onscroll 滚动事件
3. setInterval 计时器函数
4. clearInterval 清除计时器函数
5. document.createElement 创建元素节点
6. document.creatTextNode 创建文本节点
7. parent.appendChild 在parent节点下插入节点
8. window.onclick 鼠标点击事件
9. document.getElementById 通过id获取元素
10. document.getElementsByClassName 通过类名获取元素
