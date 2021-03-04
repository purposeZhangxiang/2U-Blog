# React生命周期函数

## 类组件

##### 挂载时顺序

1. **constructor()**
2. **static getDerivedStateFromProps(props, state)**
3. **render()**
4. **componentDidMount()**

##### 更新时顺序

1. **static getDerivedStateFromProps(props, state)**
2. **shouldComponentUpdate()**
3. **render()**
4. **static getSnapshotBeforeUpdate(prevProps, prevState)**
5. **componentDidUpdate()**

##### 卸载

- **componentWillUnmount()**

