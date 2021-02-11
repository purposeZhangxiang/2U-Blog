# React 组件实例三大核心

## state

> state是组件内自身的状态,state中的值一旦发生改变就会触发render函数重新渲染组件。
> 改变state值特别注意不要用赋值语句（this.state.xx = 'yy'）, 采用setState函数。
> **setState是一个异步操作,第二个参数即是更新值完毕后的callback。**

```tsx
class StateTest extends Component {
	constructor(props){
		super(props)
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

## props

> 父组件的传值在子组件中通常用props来接收

```tsx
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

## ref

> ref的用途是来获取真正的DOM节点

### 1.字符串形式（已废弃，效率问题）

``` tsx
class demo extends React.Component{
  getRef = () =>{
    console.log(this.$ref.input);// 真实dom，等于与document.getElementById()获取
  }
  render(){
    <div>
    	<input ref="input"></input>	
      <button onClick={this.getRef}>获取ref</button>
    </div>
  }
}
```

### 2.回调形式

``` tsx

class demo extends React.Component{
  getRef = () =>{
    const {input} = this;
    console.log(input);// 真实dom，等于与document.getElementById()获取
  }
  // ref 内联函数形式，即在html标签写函数表达式。 会执行两次
  render(){
    <div>
    	<input ref={current=>this.input=current}></input>	
      <button onClick={this.getRef}>获取ref</button>
    </div>
  }
  
  // 挂在类实例上面
  refInput = (current) =>{
    this.input = current
  }
  render(){
    <div>
    	<input ref={this.refInput}></input>	
    </div>	
  }
}
```

### 3.createRef(最新API)

``` tsx
class demo extends React.Component{
  inputRef = React.createRef // 一个存放ref的容器
  getRef = () =>{
    console.log(inputRef.current)
  }
  render(){
    <div>
    	<input ref={this.inputRef}></input>	
      <button onClick={this.getRef}>获取ref</button>
    </div>
  }
}
```

