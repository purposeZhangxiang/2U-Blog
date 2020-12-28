# 事件循环(EventLoop)

## 前言
Event Loop即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。这里主要针对浏览器展开。

## 先上一个面试题

```js
console.log(1)
setTimeout(()=>{
    console.log(2)
    Promise.resolve().then(()=>{
        console.log(3)
    })
})

new Promise((resolve,reject)=>{
    console.log(4)
    resolve(5)
}).then(data=>{
	console.log(data)    
})

setTimeout(()=>{
    console.log(6)
})
console.log(7)
// 请问依次输入什么？
```

是不是有些打脑壳？答案：1,4,7,2,5,6！

这里首先要引入两个概念

1. **宏队列/宏任务(macrotask/tasks)**

   一些异步回调会依次进入macrotask queue处于等待被调用。包括以下(针对浏览器环境)：

   - setTimeout
   - setInterval
   - requestAnimationFrame
   > 执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画

   - UI rendering

2. **微队列/微任务(microtask queue)**

    一些异步回调会依次进入macrotask queue处于等待被调用。包括以下(针对浏览器环境)：
    
    - Promise
    > ES6专门用来解决回调地狱的API。特别说明一下new Promise(fn) 这个fn函数体放异步操作，但是是同步执行的哦。
    - Object.observe(obj, callback[, acceptList])
    > 废弃的API。原用来监听某个对象的属性改变情况。
    - MutaionObserver
    > 这个是浏览器已经废弃的API。其实就是变动观察器,可以理解成用来观察Node(节点变化的)。前身MotationEvent事件。