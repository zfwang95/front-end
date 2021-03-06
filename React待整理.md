

#### React
* Hooks
  * 作用:在不编写class的情况下使用state以及其他React特性
  * 使用限制
  * 和生命周期的关系
* useState使用数组而不是对象
* 事件机制、事件代理
  * 事件机制：绑定于virtual DOM的事件映射到real DOM

* 类组件和函数组件的具体差异、使用场景
* state、props、refs
  * state在组件内部定义、管理，类似函数的内部声明变量
  * props由外部传入，类似函数的形参
  * 共同点：state和props都是JS对象，用于保存信息
* refs
  * 作用：可以访问DOM节点或在render中创建的React元素
  * 用法：
    * 用`React.createRef()`创建
    * 创建后赋值给目标组件实例/React元素的`ref`属性值
    * ref可用于HTML元素和自定义class组件
    * ref的current属性指向了传入该ref的元素/组件实例
* 回调refs
  * 传递函数
  * 函数（隐式地？？？）以组件实例/HTML DOM元素为参数
  * 调用时间点：
    * 组件挂载时，React调用ref回调函数并传入DOM元素/组件实例
    * 组件卸载时，React调用ref回调函数并传入null
  * 具体作用举例：将当前组件的某个元素（DOM节点/组件实例）的引用储存到当前组件实例的属性上（？？？）
* 调用state后发生了什么？？？
* react应用如何与后台通信？？？数据请求的具体操作、流程？？？
* HOC（高阶组件）
  * Render props
  * hooks
* React-Fiber
* Immutable
  * list: 类似JS中的Array
  * Map:类似JS中的Object
  * OrderedMap:
  * Set:类似JS中的Set
  * OrderedSet:
* 事件
  * React事件和普通HTML事件的区别：

  | | React事件 | HTML事件 |
  | ---- | ---- | ---- |
  | 命名规范 | 小驼峰 | 小写 |
  | 事件函数处理语法 | 函数 | 字符串 |
  |阻止浏览器默认行为|preventdefault()|return false|
  * 向事件处理函数传递参数的方法
    * 使用箭头函数，需显示地传递事件对象e，如
    ```JSX
    <button onClick={(e) => this.deleteRow(id, e)}>
      Delete Row
    </button>
    ```
    * 通过Function.prototype.bind来实现，事件对象e会被隐式传递，如
    ```HTML
    <button onClick={this.deleteRow.bind(this, id)}>
      Delete Row
    </button>
    ```
    
  * 合成事件（SyntheticEvent）：React中模拟原生DOM事件的一个事件对象
    优点：对各个浏览器的兼容性好； 方便统一管理； 统一存放于一个数组，避免频繁的垃圾回收
    注意：原生事件优先于合成事件执行，故需避免混用（原生事件>>react合成事件>>挂载于document上的非react事件；react事件挂载于document）
  * 监听、订阅、移除、冒泡
  * 事件的用法规范
* 前端框架的作用（原生JS的不足）
  * DOM操作流程简化、效率提升
  * 大幅减少重绘重排
  * 组件化、代码复用
* React Native：使用React语言进行移动端开发
* 虚拟DOM + Diff算法：减少对真实DOM的操作
  * 虚拟DOM（virtual DOM）：
    * 调用渲染函数会修改虚拟DOM
    * 虚拟DOM是一个JS数组对象（优点：JS比对要快过DOM比对；在没有DOM概念的平台也可以运行，如iOS、Android）
  * Diff算法
    * 同层比对
    * 
* React的具体使用
  * 最简化的使用：HTML中的DOM容器（HTML标签） + Script标签 + React组件
  具体说明：
    * DOM容器的示例：`<div id="xx"></div>`
    * Script标签：2个用于加载React的`<script>`，以及加载组件代码的`<script>`
    * React组件：此处指描述React组件的JS文件
  * 生产环境部署的相关优化（optimizing performance）：
    1.压缩JS代码
    2.如果是外部加载React的方式，在生产环境应使用production.mini.js结尾的版本
    3.通过build生成生产版本
    4.使用单文件版的React和ReactDOM（即外部加载的方式？？？）
    5.brunch的生产构建优化？？？
* React的功能实现优先通过传递属性实现，而不是在组件里暴露方法
* virtual DOM
* diff算法
* Reactpath、事件系统
* view层渲染
* Fiber架构：组件即fiber节点？？？
* 优先级机制
* React更新
  * render阶段
  * commit阶段
* React无内置Ajax，需用axios
* Babel将JSX转换成React.createElement(xxx)
* createElement生成vurtual DOM
* ReactDOM()、render()将virtual DOM转化成真实DOM
* ReactElement（即virtual DOM）的typeof判断结果为symbol类型的变量，可防止XSS（外来json对象因不支持symbol会被过滤）
* React路由配置：
  * 作用：向router说明URL匹配及匹配后的代码执行
  * 用法：
    * 利用`<link>`: `<link to=""></link>`
    * 利用`<Router>`：
    ```JSX
    <Router>
      <Route path="/" component={APP}>
        <Route path="abount" component={About}/>
        <Route path="inbox" component={Inbox}>
          <Route path="messages/id" component={message}/>
        </Route>
      </Route>
    </Router>
    ```
  * `<IndexRoute/>`配合this.props.children可不用配置path，直接在当前path的基础上添加组件
  * 在path中使用绝对路径和相对路径的效果是一样的
  * `<Redirect>`能添加一个设定过的url，用于跳转到对应的组件
  * 



#### JQuery
* JQuery的作用：简化DOM操作的相关代码

#### React Component
* 组件的设计原则：单一功能
* React的单向数据流：？？？
* class组件比函数组件提供更多功能
* 组件
  * 即独立、可复用的代码片段
  * 功能上对应UI
  * 可视为入参为props、返回值为React/HTML元素的函数
  * 分为函数组件/class组件
  * props：单个对象，可视为对组件所有属性和子组件的收纳
  * 组件名称以大写字母开头、以与原生html元素/DOM标签区分开
* 组件状态
  * 组件内部状态通过state储存
  * redux专门用作状态管理（action、reducer）
* 组件通信（即props？？？）
* 组件代码的复用只推荐用组合的方式，不推荐用继承的方式
  * 组合-包含关系：1.props.children的形式（例子？？？）；2.复用的组件作为props传入
  * 组合-特例关系：为已有组件传入特定props并包装成新组件
* 组件的各个阶段
  * 挂载
    1.componentWillMount
    2.render
    3.更新DOM、refs
    4.componentDidMount
  * 更新
    1.componentWillRecieveProps（props更新时）
    2.shouldComponentUpdate（不返回false时执行第3步，否则跳过）
    3.更新DOM、refs
    4.componentWillUpdate
  * 注销（卸载）
    1.componentUillUnmount
  注：挂载和更新阶段各自可分为render阶段和commit阶段（产生实际影响）

#### Redux
* Redux是JS状态管理器，针对state的变化，属于可预测化状态管理
* Redux的内容：commonJS模块集合
* UMD文件的作用：可用window.Redux访问Redux；可在不需要commonJS模块打包器的前提下获得对应包的优良体验
* state以Object Tree的形式储存于单一store中
* 只能通过触发action改变state
* reducer用于描述aciton对state的操作
* createStore接收一个函数作为参数
* 创建完成的store通过subscribe()、dispatch()方法订阅、修改
* 一个reducer只支持对应一个store（不支持多个）
* Redux可以通过action追溯应用的每一次修改
* reducer输入：previous state、dispatching action
  输出：next state
* state tree是只读对象
* action对象必须有type属性
* 针对reducer的测试？？？
* 可通过一个reducer调用多个reducer来管理整个应用的state
* React-Redux：
  * React-Redux是Redux的子集
  * Provider：使React组件可被连接
  * connect：连接React组件和Redux的store