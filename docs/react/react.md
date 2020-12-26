# React启程


## 1.安装

- 环境要求：[Node >= 8.10 和 npm >= 5.6]

- 安装react脚手架：

  ```
  npm install -g create-react-app
  ```

- 创建react项目

  ```
  npx create-react-app {项目名称} <js语言>
  npx create-react-app {项目名称} --typescript <ts语言>
  ```

  tips:react项目目录,额,对比vue也属实有些拉跨。。。

- 启动项目

  ```
  npm start
  ```



## 2.React组件

1. 类组件

   ```
   import React,{Component} from 'react';
   // q1 class Welcome extends Component | class Welcome extends React.Component | class Welcome extends Component 的区别?
   class Welcome extends Component {
     constructor(props){
     	super(props); //q2 关于这里会发现裂开,直接带删除线了?暂时也没弄明白.想在constructor使用this,必须要super继承.这里不明白先可以看ES6 Class.
     }
     render() {
       return <h1>Hello, {this.props.name}</h1>;
     }
   }
   export default Welcome;
   ```

2. 函数式组件（stateless,又叫无状态组件）

   ```
   import React from 'react';
   /** 乍一看根本不需要引入import,其实非也,是因为在Babel转译我们的App.js的时候，会把JSX语法糖转换为React.createElement方法。
     * 仔细请阅读http://www.5idf.cn/jishu/59.html
     */
   
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   export default Welcome;
   ```

   tips:看到这是不是又觉得有些难以适应,毕竟.vue的三层分明<template></template>    <script></script>   <style></style>

## 3.props 和 event

1. 父传子

   ```
   // 若是在父组件应用了以上组件Welcome
   // Father.js
   function Father() {
     return (
     	<div class='Root'>
     		<Son name='smith' />
     	</div>	
     );
   }
   // Son.js
   function Son(props){
   	<div>
   		<h1>Hola,{props.name}</h1>
   	</div>	
   }
   ```

2. 字传父

   ```
   import React, { Component } from 'react';
   import Son from './Son';
   
   class Father extends Component {
       constructor(...props) {
           super(...props);
           this.state = {
               son: ''
           }
       }
       render() {
           return (
               <div>
                   <p>子传递过来的值{this.state.son}</p>
                   <Son getVal={this.getVal} />
               </div>
           )
       }
   
       getVal = (data) => {
           this.setState({
               son: data
           })
       }
   }
   
   
   
   class Son extends Component {
       constructor(...props) {
           super(...props)
           this.state = {
               sonState: '111'
           }
       }
       render() {
           return (
               <div>
                   <p>{this.state.sonState}</p>
                   <p onClick={this.toFather}>传父</p>
               </div>
           )
       }
   
       toFather = () => {
           this.props.getVal(this.state.sonState)
       }
   }
   ```

   - react 中数据是单向流动的,所以不要在子组件直接去修改props的值.

3. event 

   - 2.1 事件绑定

     ```
     class BindEvent extends Component {
         render() {
             return (
             	<div>
             		<button className="container" onClick={this.test.bind(this)}>方式一</button>
                		<button onClick={this.test2}>方式二</button>
             	</div>	
             )
         }
     
         test() {
         	// 普通函数声明 需要bind(this)
             console.log(this.props)
         }
     
         test2 = () => {
         	// 箭头函数则DUCK不必
             console.log(this.props)
         }
     }
     ```

   - 2.2 事件传参

     ```
     class BindEvent extends Component {
         render() {
             return (
             	<div>
             		<button className="container" onClick={this.test("param1"))}>错误的方式</button>
                		<button onClick={()=>this.ok1("p1","p2")}>ES6的方式</button>
                		<button onClick={function(){return this.ok2(p1,p2)}.bind(this)}>ES6的方式</button>
             	</div>	
             )
         }
         
         test(param){
         	console.log(,params) //未点击就执行了
         }
         
         ok1(p1,p2){
         
         }
         
         ok2(p1,p2){
             
         }
     }
     ```

     

4State  

```
class StateTest extends Component {
	constructor(...props){
		super(...props)
		 // 关于q1遗留的问题目前这么写可避免删除线.同时发现在constructor中随意console.log会执行两次,在render方法debugger后发现进入了两次断点.后来去网上查找原因,React在开发环境下会刻意执行两次渲染,以防止组件内有什么side effect引起 bug，提前预防。官方github也作出了声明.
		//初始化state
		this.state = { desc:'我是默认值' }
	}
    render() {
        return (
        	<div>
        		<span>{this.state.desc}</span>
           		<button onClick={this.changeDesc}>修改state值</button>
        	</div>	
        )
    }
    changeDesc = () =>{
    	this.setState({
    		desc:'改变成船新值'
    	})
    }
}
```

1. 注意的几点
   - state不要直接更改, this.stat.desc = 'xxx' ,这种方式改了页面也不会刷新的.请使用setState函数.
   - state的值可能是异步更新的.
   - state的更新会被合并.