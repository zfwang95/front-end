# React

## 基本概念

* HTML模版
* ReactDOM.render()
  * `ReactDOM.render` 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
* JSX 语法

* 组件

* this.props.children

  - this.props.children 属性表示组件的所有子节点

* PropTypes

  - 组件类的PropTypes属性用来验证组件实例的属性是否符合要求

* 获取真实的DOM节点
  - 组件属于虚拟DOM
  - 通过ref属性、this.refs.refName标记、获取真实的DOM节点

* this.state

* 表单（用户输入的处理）
  - 不能用 this.props.value 读取
  - 通过 event.target.value 读取用户输入的值

* 组件的生命周期

* Ajax

  - 组件的数据来源，通常是通过 Ajax 请求从服务器获取