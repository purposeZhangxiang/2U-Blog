# React 组件通信的方式

1. ## 父子组件

   - **父传子**

     ```tsx
     // Dad.tsx
     import React,{Component} from 'react'
     export default class Dad extends Component{
         render(){
             <div>
                 <Son title="父组件的值"></Son>	
             </div>	
         }
     }
     ```

     ```tsx
     // Son.tsx
     import React,{Component} from 'react'
     
     interface IPropType{
         title: string
     }
     // 这里有泛型约束,第一个是props,第二个是state 可查看下面说明
     export default class Son extends Component<IPropType|any>{
         render(){
             <div>
             	<span>{this.props.title}</span>
             </div>	
         }
     }
     ```

     *说明*

     ```
     type StateType = string
     ```

     

   - **子传父**

     ```tsx
     // Dad.tsx
     import React,{Component} from 'react'
     export default class Dad extends Component{
         
         render(){
             <div>
                 <Son title="父组件的值"></Son>	
             </div>	
         }
     }
     ```

     

     

2. ## 跨级组件

3. ## 兄弟组件

   

