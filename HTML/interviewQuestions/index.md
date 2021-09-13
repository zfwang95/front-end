## 知识体系参考结构

# 入门
## 一、HTML基本介绍
### 1.HTML功能、特性
### 2.HTML的各个版本
#### ——HTML5的新属性（html）
* 新的语义标签
- article 独立的内容。
- aside 侧边栏。
- header 头部。
- nav 导航。
- section 文档中的节。
- footer 页脚。
* 画布(Canvas) API
* 地理(Geolocation) API
* 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
* sessionStorage 的数据在浏览器关闭后自动删除
* 新的技术webworker, websocket, Geolocation
* 拖拽释放(Drag and drop) API
* 音频、视频API(audio,video)
* 表单控件，calendar、date、time、email、url、searc
## 二、HTML基础
### 1.HTML文档结构
### 2.元素-文字
### 3.元素-图片
### 4.元素-列表
### 5.元素-表格
### 6.元素-表单
### 7.样式和脚本
### 8.DOM
#### ——DOM 是什么？
- document object model
- 是 HTML 和 XML 文档的接口(API)
- 当浏览器第一次读取(解析)HTML文档时，它会创建一个大对象，一个基于 HTM L文档的非常大的对象，这就是DOM。
- 它是一个从 HTML 文档中建模的树状结构
- DOM 用于交互和修改DOM结构或特定元素或节点。
- JS 中的document对象表示DOM
- 将html表示为分层的DOM节点
- 提供DOM API对DOM节点进行各类操作
- DOM是HTML在内存中的表现形式
#### ——简单介绍DOM树？？？
****
### 9.常见的元素属性
#### ——href 与 src的异同
* href
- href (Hypertext Reference)指定网络资源的位置，从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系。（目的不是为了引用资源，而是为了建立联系，让当前标签能够链接到目标地址。）
	- 仅建立链接
* src
- src source，指向外部资源的位置，指向的内容将会应用到文档中当前标签所在位置
	- 在请求 src 资源时会将其指向的资源下载并应用到文档中，比如 JavaScript 脚本，img 图片
	- 当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等也如此
#### ——title和alt属性的区别
* title
- 文字、图片正常显示时的额外说明文字
- 可用于哪些元素？？？
* alt
- 图片不能显示时的替代说明文字
- 仅可用于图片元素？？？
### 10.事件
#### ——如何知道是否在元素中使用了event.preventDefault()方法？
* 在事件对象中使用event.defaultPrevented属性，根据对应的boolean值判断
#### ——事件以及相关的概念
#### ——什么是event.target？
*  event.target是发生事件的元素或触发事件的元素。
  * 例如：onclick属性意义上对应的元素，即button
#### ——什么是event.currentTarget？
* event.currentTarget是我们在其上显式附加事件处理程序的元素。
  * 例如：onclick属性所标记的元素，即在哪个元素上写了onclick属性并赋值
#### ——event.preventDefault() 和 event.stopPropagation()方法之间有什么区别？
* event.preventDefault() 方法可防止元素的默认行为
* event.stopPropagation()方法用于阻止捕获和冒泡阶段中当前事件的进一步传播
#### ——什么是事件捕获？
* 和事件冒泡的区别？除了事件传递的方向不同
#### ——什么是事件冒泡
- html元素对应的事件，从最开始的内层起，逐层向外产生影响
- 在示例中，似乎是目标元素的事件可以在其和window之间的任何元素捕获到
#### ——什么是事件传播?
- 事件在window和目标元素之间的各个层级之间传播
- 事件传播有三个阶段：
  * 捕获阶段–事件从 window 开始，然后向下到每个元素，直到到达目标元素。
  * 目标阶段–事件已达到目标元素。
  * 冒泡阶段–事件从目标元素冒泡，然后上升到每个元素，直到到达 window。
#### ——事件委托
* 事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。使用事件委托的一个好处就是可以节省内存。
### 11.页面重绘/重排
#### ——重排、重绘的定义和区别
#### ——document.write 和 innerHTML 的区别？
* document.write 只能重绘整个页面
* innerHTML 可以重绘页面的一部分（任意部分？？？）
- innerHTML也能重绘整个页面？？？

# 进阶
### 1.HTML语义化
#### ——HTML语义化 
* 页面结构化
- 结构清晰
	- 便于开发人员阅读
- 便于浏览器、搜索引擎解析
- 不以CSS为依赖前提，保证HTML内容为易读的文档格式
### 2.iframe
#### ——iframe的作用、优缺点
* 作用、优点
- 解决加载缓慢的第三方内容如图标和广告等的加载问题
- Security sandbox
- 并行加载脚本
* 缺点
- iframe会阻塞主页面的Onload事件
- 即使内容为空，加载也需要时间
- 没有语意
	- 语义？？？

# 综合