# React中的Context

## 前言

> 熟悉vue的伙伴知道，当跨级组件嵌套过深时候，用props透传略显麻烦。那么就有Provider和Injecct操作来解决这种业务场景。React中同样也有哦，下面引出Context。

## 使用Context

``` tsx
// Grand.tsx
import Dad from 'xxx/Dad.tsx'
export const { Provider，Consumer } =  React.createContext("默认值")
class Grand extends Component{
  render(){
    return (
      <Provider value="爷爷">
      	<Dad />
      </Provider>
    )
  }
}

// Dad.tsx
import Son from 'xxx/Son.tsx'
class Dad extends Component{
  render(){
    return (
      <div>
      	<p>父组件</p>
      </div>
    )
  }
}

// Son.tsx
import { Consumer } form 'xxx/Grand'
class Son extends Component{
  render(){
    <Consumer>
      {(val)=>{
        return <span>孙组件：{val}</span>
      }}
    </Consumer>
  }
}

```

