# React Hooks

## 前言

> 函数式组件被称之为"无状态组件"。当使用了react hooks后,函数式组件也讲拥有"状态"。

## Hooks的优劣

### 优

1. 代码的复用性更高
2. 代码更为简洁清爽

### 劣

1. 响应式的useEffect
2. 状态不同步

## hooks - useState

```tsx
import React,{useState} from 'react'
function hookComponent(prop){
  const [count,setCount] = useState(0)
  
  return(
  	<div>{count}</div>	
  )
}
```



## hooks - useEffect

```tsx
import React,{useState,useEffect} from 'react'
function hookComp(prop){
  useEffect(()=>{
    console.log("1")
  })
  
  return(
  	<div></div>	
  )
}
```



