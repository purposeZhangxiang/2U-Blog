# 面向切片编程(AOP)

## 1.丐版方式
```js
Function.prototype.after = function(){
    const ctx = this;
    return function () {
        ctx(...arguments)
        callback()
    }
}
function doSomething(who){
    console.log(`${who}吃个饭`)
}
function nextDo = doSomething.after(function(){
    console.log(`饭后日常打豆豆`)
})
nextDo("2U")

```



## 2.常规方式

```js
class Person {
    playLOL() {
        console.log('LOL 上号')
    }
}

class PentaKill {
    constructor(person) {
        this.person = person
    }
    win() {
        this.person.playLOL();
        console.log('拿个五杀 去吃饭')
    }
}
let per = new Person();
let penta = new PentaKill(per)
penta.win()
```



## 3 高逼格方式-装饰器

