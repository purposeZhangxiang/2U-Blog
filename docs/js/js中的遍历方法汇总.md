# js中的遍历方法汇总

## for

>有 continue break 无 return

```js
for(let i=0;i<10;i++){
  console.log(i)
}
```

## for in

> 有contine break   无 return

```js
let arr = [1,2,3];
let obj = { name:'zx',age:'24' }

for(let i in arr){
  // i为数组索引下标
}

for(let i in obj){
  // i为对象的键
}

```

## for of

> 有coutine break 无 return

```js
let arr = [1,2,3];
let obj = { name:'zx',age:'24' }

for(let val of arr){
  // val为数组中的元素
}

// 遍历对象是 对象必须有iterator
```

## forEach

> 无continue break return

```js
let arr = [1,2,3]

arr.forEach((item,index,_arr)=>{
  // item  数组元素
  // index 数组索引
  // _arr  原数组
})

```

## map

> 返回一个新数组

```js

```

## filter

> 返回一个新数组

``` 

```

## every

> 返回一个布尔值

```

```

## some

> 返回一个布尔值

```

```

## reduce

> 返回运算的结果

```

```







