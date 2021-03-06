# Promise

## 前言

> Promise的存在主要为了去解决异步的'回调地域'的问题。

## Promise的三个状态

1. pending 初始状态

2. fufilled 操作成功

3. Rejected 操作失败

   promise的状态一旦经过改变就不会再变了。也只有两个可能:pending --> fulfilled 或者 pending-->rejected

## 使用

1. 最基础的demo

```js
new Promise((resolve,reject)=>{
  // 这个函数体放异步操作，代码同步执行！！
	setTime(()=>{
  	resolve('hello')
  },2000)
}).then(res=>{
	console.log(res)
}).catch(err=>{
  // 捕获错误
  console.log(err)
})
```

2. 多个ajax都获取结果后再去执行新的事件（关心异步结果顺序）

``` js
let p1 = new Promise(()=>{
  resolve("p1 success")
})

let p2 = new Promise(()=>{
  resolve("p2 success")
})

let p3 = new Promise(()=>{
  reject("p3 fail")
})

Promise.all([p1,p2]).then(res=>{
  // 这里的res会按照all方法接受的数组序列依次返回响应结果
  	console.log(res);
})

// 注意 ！！！
Promise.all([p1,p2,p3]).then(res=>{
  // 根本不进入到then函数
}).catch(err=>{
  // Promise.all方法只要有一个异步请求失败了,都视作失败
  console.log(err)
})
```

3. Promise.race 

   > 顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
   >
   > 使用场景展示未联想到。

## Promise手写源码

  ```js
//promise基本结构
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('FULFILLED')
  }, 1000)
})
// 总结出Promise是一个构造函数，且参数必须是一个函数
const isFunc = (fn) = typeof fn === "function";

class MyPromise{
  constructor(handle){
    if(!isFunc(handle)) throw new Error("MyPromise must accept a function as a parameter")
    
    this._status = 'PENDING';
    this._value = undefined;

    this._fulfilledQueues = []
    this._rejectedQueues = []
    
    try {
      handle(this._resolve.bind(this),this._reject.bind(this))
    }catch(err){
      this._reject(err)
    }
  }

  _resolve(val){
      if(this._status != "PENDING") return;
      this._status = "FULFILLED"
      this._value = err;
  }

  _reject(err){
      if(this._status != "PENDING") return;
      this._status = "REJECTED"
      this._value = err;
  }

  then(onFulfilled, onRejected){
    const {_value,_status,_fulfilledQueues,_rejectedQueues} = this
    switch(){
      case 'PENDING':
        _fulfilledQueues.push(onFulfilled)
        _rejectedQueues.push(onRejected)
        break;
      case 'FULFILLED':
        onFulfilled(_value)
        break;
      case 'REJECTED':
        onRejected(_value)
        break;
    }
    return new MyPromise(()=>{})
  }
}
  ```
