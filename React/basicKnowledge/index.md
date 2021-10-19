## 知识体系参考结构

# 入门
## 一、JSX 简介
- JS的语法扩展
- 模版语言？？？
- 可生成React元素
- JSX和React不强制关联，React可以不用JSX
- 基本用法举例：`const a = <h1> b is {a} </h1>;`
- JSX是一个表达式，可以作为函数返回值、参数等
- JSX和HTML的语法有区别：如属性名tableindex在JSX中为tableIndex;
- (React的特性？？？)React DOM自动对输入文本进行转义，可有效防止CSS(cross site scripting)攻击。
- Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用
	- Babel？？？
## 二、元素渲染
- 元素是react应用的最小组成单位
- 想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 `ReactDOM.render()`，即：
	```javascript
	ReactDOM.render(element, document.getElementById('root'));
	```
- react元素是不可变对象
	- 一个元素代表了某一时刻的UI
	- 更新 UI 唯一的方式是创建一个全新的元素，并将其传入`ReactDOM.render()`
- React 只更新它需要更新的部分
#### ——ReactDOM.render()
* `ReactDOM.render` 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
## 三、组件 & Props
- props之于组件，犹如入参之于函数
- 组件的定义
	- 函数组件(需要在入参中体现props)
	```javascript
	  function Welcome(props) {
	    return <h1>Hello, {props.name}</h1>;
	  }
	```
	- class组件(直接使用props)
	```javascript
	  class Welcome extends React.Component {
	    render() {
	      return <h1>Hello, {this.props.name}</h1>;
	    }
	  }
	```
	- 自定义组件（即React中的组件）的名称必须以大写字母开头
- 组件的使用
	- 隐式地将组件赋给props并传递给组件
- 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
#### ——React.Component
- 生命周期方法
	- render()
		- class组件中唯一必须实现的方法
		- 被调用时检查this.props和this.state的变化并返回结果
		- render()应为纯函数（不改变传参本身）
	- constructor()
		- 作用
			- 初始化state
				- 通过给 this.state 赋值对象来初始化内部 state
				- 在 constructor() 函数中不要调用 setState() 方法
			- 进行方法绑定
				- 为事件处理函数绑定实例
					- 绑定this？？？
		- 注意
			- React.Component 子类，即一般的使用中，必须先调用 super(props)，以保证this.props的正常使用
	- componentDidMount()
	- componentDidUpdate()
	- componentWillUnmount()
- 其他API
	- setState()
	- forceUpdate()
- class属性
	- defaultProps
	- displayName
- 实例属性
	- props
	- state
- 参考
	- https://zh-hans.reactjs.org/docs/react-component.html
#### ——this.props.children
- this.props.children 属性表示组件的所有子节点
#### ——PropTypes
- 组件类的PropTypes属性用来验证组件实例的属性是否符合要求
## 四、State & 生命周期
- 更新UI界面的方法
	- 方法一：修改我们想要渲染的元素后再直接调用 ReactDOM.render() 
	- 方法二：使用class组件使得组件与state或生命周期相关联
- class构造函数
	- 作用：引入props外的其他参数？？？
- 生命周期
	- 挂载(mount)
		- componentDidMount(){}
	- 卸载(unmount)
		- componentWillUnmount(){}
* 生命周期
  * 生命周期方法由React主动调用
  * 函数组件能否使用生命周期方法？？？
  * 基本阶段（各个阶段的触发时机？？？）
    * 挂载, 相关方法及触发顺序：constructor() >> render() >> componentDidMount()
    * 更新, 相关方法及触发顺序：render() >> componentgDidUpdate()
    * 卸载, 相关方法：componentWillUnmount()
- 正确地使用State
	- 不要直接修改state
		- 使用setState()以保证能够在修改state的同时重新渲染组件
	- 注意State的更新可能是异步的
		- 依赖于State的值需通过函数进行改变
	- State的更新会被合并
		- 即，仅修改State的部分内容，会更新被替换的内容和整个State，未改动的内容本身不变
- 数据是向下流动的
	- 即，State中的数据只能传入和影响对应的下级组件
- 有状态/无状态组件？？？
* 常用的生命周期方法：
  * render()
    * class组件唯一必须实现的方法
    * 应为纯函数
    * shouldComponentUpdate()返回false时，不会调用render()（即不更新组件）
  * constructor()
    * 用于初始化state或进行方法绑定（为事件处理函数绑定实例，利用bind？？？）
    JS中，class方法默认不绑定this，React目前保持这一默认，不过已有相关语法（class fields方法，使用箭头函数的形式定义一个方法，目前还在实验阶段）可实现不用额外绑定一个方法和this。
    * 第一句应为super(props)（为何不直接写入React底层？？？组件没有props时不用写？）
    * 在不见挂载前会调用构造函数
  * componentDidMount()
    * 在组件挂载后立即调用
    * 内容（方法中一般包含的操作）：
      * 依赖于DOM节点的初始化
      * 添加订阅
			* 实例化网络请求
  * componentDidUpdate()
    * 更新后立即调用
    * 首次渲染不调用
    * 内容：DOM操作、网络请求
    * 方法本身也可能再次更新组件，从而再次触发方法，故一般用条件语句包裹目标操作
    * shouldComponentUpdate()返回false时不调用
  * componentWillUnmount()
    * 组件卸载之前直接调用
    * 内容：
      * 清除timer
      * 取消网络请求
      * 清除订阅
    * setState()等操作将无效，组件卸载后永不再挂载
  * shouldComponentUpdate()
    * 用法（参数）：shouldComponentUpdate(nextProps, nextState)
* React API
  * setState()：
    * 用法：setState(updater/stateChange, [callback])
      * 接收一个函数（updater）的示例：
      ```javascript
      this.setState((state, props) => {
        return {counter: state.counter + props};
      }); // updater的返回值会和state进行浅合并
      ```
      * 接收一个对象（stateChange）的示例：
      ```javascript
      this.setState({quantity: 2});
      ```
    * 作用：将对组件state的更改排入队列，并通知React需要使用更新后的state重新渲染此组件及其子组件
    * 批量推迟更新，state的更新不一定立即生效。
    在setState的callback或组件的componentDidUpdate中对state进行读取可保证获取的state最新
    * setState是异步的：
      * 接收一个对象时，setState读取`this.state`中的属性，而`this.state`在组件重新渲染后才会变化，不随setState()的执行即时变化
      * 接收一个函数时，setState读取`state`，可以认为是以`this.state`为基础，而且随setState()的执行而立即变化的临时数据
      * 综上，要利用两次组件渲染之间的即时的state时，需要利用updater
  * forceUpdate():
    * 用法：`component.forceUpdate(callback)`
    * 使用场景: state和props不变却又需要重新渲染组件时（即，render()依赖于其他数据）具体例子？？？
## 五、事件处理
#### ——React合成事件
- SyntheticEvent
	- 基本说明？？？
- 事件
	- 如：onclick
- 事件池
	- react17中不再使用事件池
	- SyntheticEvent 对象会被放入池中统一管理，这意味着 SyntheticEvent 对象可以被复用。
- 事件默认不持续，事件处理函数调用后事件属性清空
	- 如果你需要在事件处理函数运行之后获取事件对象的属性，你需要调用 e.persist()
#### ——基础
- 事件命名采用camelCase法
- 对应的JSX与HTML的语法区别
	- JSX
		- 事件处理函数写作{}包裹的函数名称
		- 不能通过返回 false 的方式阻止默认行为，必须显式地使用 preventDefault
	- HTML
		- 事件处理函数写作字符串（函数名+()）
- JSX回调函数中的this
	- JS中class的方法默认不会绑定this
		- 未绑定时，在调用对应函数时this的值为undefined
	- 为class中的方法绑定this
		- 方式一：在class 的constructor中绑定
			- Function.prototype.bind
		- 方式二：使用 public class fields 语法
			- 属于实验性的功能
		- 方式三：在回调的时候使用箭头函数
			- 可能有性能问题
## 六、条件渲染
## 七、列表 & Key
## 八、表单
#### ——表单（用户输入的处理）
  - 不能用 this.props.value 读取
  - 通过 event.target.value 读取用户输入的值
## 九、状态提升
## 十、组合 vs 继承
## 十一、React 哲学
#### —— React项目文件结构
  * 方案一：按功能/路由划分，同一功能/路由相关的js、css、test.js文件置于同一文件夹下
  * 方案二：按功能类型划分，如提供功能/API的js文件及相关的test.js归为一组
  * 基本原则：嵌套层数尽可能少，一个项目最多4层；开始一个项目时，设计一个简单、可用的文件组织结构即可，实际中总是要多次修改的
  * 技巧：先将所有文件归入一个文件夹下，再从明确的文件开始逐个归类
#### —— React术语
* 单页面应用（single-page application）
	* 单个HTML页面 + 相关资源（JS、css）
	* 页面不会（整个）重新加载
* Compiler（编译器）：如Babel，将ES6转换为旧语法以兼容旧版浏览器
* Bandler（打包工具）：如webpack、Browsery，将多个JS、css文件组合，从而优化浏览器效率
* Package管理工具：如npm、yarn
* CDN：Content Delivery Network，内容分发网络
* JSX：为JS的语法扩展；JSX最终被编译为React.creatElement()函数并调用，生成React元素（普通JS对象）
* props.children：即组件被调用时包含的内容，如`<Welcome>Hello World!</Welcome>`中的“Hello World！”。
可用于以类似普通HTML的形式添加组件的文本内容并获取、编辑
* 受控组件 & 非受控组件：
	* 受控组件：元素值受React控制，如通过React读取并重新赋值的`<input>`
	* 非受控组件：元素值不受React影响，如普通的不额外处理的`<input>`
* key：用于标记数组中的元素；同一数组內各个兄弟元素的key彼此唯一即可
* 协调：props、state有变化时，比较变化前后的虚拟DOM，虚拟DOM有变化才会更新真实DOM
#### —— Ajax
* 组件的数据来源，通常是通过 Ajax 请求从服务器获取
* 如何在React中发起AJAX请求
  * 借助AJAX库： Axios, JQuery AJAX
  * 利用浏览器内置的window.fetch
* 应在componentDidMount中发起AJAX请求

# 进阶
## 一、高阶组件
## 二、Refs & DOM
#### ——获取真实的DOM节点
  - 组件属于虚拟DOM
  - 通过ref属性、this.refs.refName标记、获取真实的DOM节点
## 三、HOOK
#### ——Hook简介
- React 16.8 的新增特性
- 作用：不编写 class 的情况下使用 state 以及其他的 React 特性
- hook的创造动机（想要解决的问题）
	- 在组件之间复用状态逻辑很难
		- hook前已有的解决方案
			- 具体方案/工具
				- render props
				- 高阶组件
			- 存在的问题
				- 需要重新组织组件结构
				- 代码复杂、晦涩
				- “嵌套地狱”
		- Hook 使你在无需修改组件结构的情况下复用状态逻辑
	- 复杂组件变得难以理解
		- 具体问题：状态管理逻辑和生命周期过于耦合
		- Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分
	- React中的class难以理解，用法特殊
		- Hook 使你在非 class 的情况下可以使用更多的 React 特性
- hook分类（非官方）
	- 内置hook
	- 自定义hook
- 常用hook
	- useEffect()
		- 相当于 componentDidMount 和 componentDidUpdate，在react更新DOM后自动运行其内部的语句
		- 可以通过返回一个函数来指定如何“清除”副作用
		- 在单个组件中可多次使用
		- 相比于在生命周期函数中执行语句，似乎不能做到精细化控制？？？
	- useState()
		- 示例：
			- const [count, setCount] = useState(0)
		- 特性
			- 返回值为：当前 state 以及更新 state 的函数
			- 不像 class 中的 this.setState，对应的setSomethin()更新 state 变量总是替换它而不是合并它
- hook使用规则
	- 只能在函数最外层调用 Hook
	- 只能在 React 的函数组件中调用 Hook
- 自定义hook
	- 自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook
#### ——Hook API索引
- useRef()
	- 初始化:const something = useRef(initValue);
	- 不赋初值的效果是？？？
	- 作用：方便地保存可变值
		- 通过something.current访问保存的值
	- useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象。
	- 在元素的ref属性中引用相关值
		- ref属性？？？
		- 盒子模型？？？
	- 补充：
		- createRef()
			- 看起来是useRef()之前的方法，用法和useRef基本一致

# 综合