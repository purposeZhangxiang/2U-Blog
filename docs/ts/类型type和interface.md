# 类型type和interface

```
/***
 * type 和 interface的区别
 * 同
 * 1- 都可以描述对象和函数
 * 2- 都允许扩展(写法注意)
 * 
 * 
 * 异
 * 1- type可以声明基本类型,联合类型,元组的别名。interface不可
 * 2 -type 语句中还可以使用typeof 获取实例的 类型进行赋值
 * 2- type支持类型映射，interface不支持
 * 
 * 使用原则：
 * 能用interface就用interface,f否则用type
 */


// 同2

interface Person {
    name: string;
}
interface User extends Person {
    age: number;
}


type Person2 = {
    name: string;
}
type User2 = Person2 & { age: number };


// 异1

type Name = string; // 基础数据类型


interface Dog {
    wang();
}
interface Cat {
    miao()
}
type Pet = Dog | Cat; // 联合类型


type PetList = [Dog, Pet]

let a: PetList = [{ wang() { } }, { miao() { } }]


// 异2
let div = document.createElement('div');
type DivType = typeof div


// 异3

type Keys = "fristname" | "surename";

type DuckType = {
    [key in Keys]: string
}

// interface DuckType2  {
//     [key in Keys]: string
// } // error

const test: DuckType = {
    fristname: '1',
    surename: '2'
}
```