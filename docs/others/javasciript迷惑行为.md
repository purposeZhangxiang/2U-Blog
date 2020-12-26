# JavaScript迷惑行为？ 

## 迷惑行为之 -- 连续赋值

```js
var a = {}
c.a = c = [];
alert(c.a) //发挥一下你的小脑袋瓜子想一想

```

- 答案其实是undefined，微笑.jpg  接下来需要好好分析一波原因了。归根结底不是我们的问题，而是程序设计的问题。

## 迷惑行为之 -- 各种运算

```js
console.log(true == 1)
console.log(true === 1)
console.log(9999999999999999)
console.log(0.1 + 0.2 == 0.3)
console.log([] + [])
console.log({} + [])
console.log([] + {})
console.log((! + [] + [] +![]).length)
```



## 迷惑行为之 -- 

  

  

  

  

  

  