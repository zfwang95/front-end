# frontend面试题-1
## 最大安全数
* ES6
- BigInt
	- 可以表示任意大的整数
		- 不在有“最大安全数”
## 小数计算的误差
* JS采用IEEE754标准，双精度浮点数，无法精确表示一些小数
* 解决方式
- 另写一个方法，先转换为整数，计算完成后再转回小数
* 特例问题
- toFixed()方法，在chrome中不满足通用的银行家舍入规则
## commonJS和ES6的区别
* commonJS？？？
- commonJS是模块规范，ES6中用ES6 module实现相同作用
- 子主题 2
* 区别
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJs 是单个值导出，ES6 Module可以导出多个。
- CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层。
- CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined。
## 循环依赖
* 两个脚本相互依赖
* 两种加载模式各自的表现
- CommonJS 的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
- ES6 根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
## cookie、token和session的区别
* 共同的作用
- 标识http请求的来源
* session
- 储存状态列表信息
* cookie
- 储存sessionID信息
- 在服务器和客户端之间传递，完成session相关的通信
* token
- 直接自己储存用户信息
- session+cookie是一套方案，token自己是一套方案
- 需要开发者手动添加
* jwt
- 跨域认证方案
- 具体的？？？
## 防抖和节流函数
## href 与 src的异同
* href
- href (Hypertext Reference)指定网络资源的位置，从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系。（目的不是为了引用资源，而是为了建立联系，让当前标签能够链接到目标地址。）
	- 仅建立链接
* src
- src source，指向外部资源的位置，指向的内容将会应用到文档中当前标签所在位置
	- 在请求 src 资源时会将其指向的资源下载并应用到文档中，比如 JavaScript 脚本，img 图片
	- 当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等也如此
## css的盒子模型
* 基本要素
- content
	- 内容
- padding
	- 填充
- margin
	- 边界
- border
	- 边框
* 不同类型的特征
- IE盒子模型
	- content包含了padding和border
- W3C盒子模型
## title和alt属性的区别
* title
- 文字、图片正常显示时的额外说明文字
- 可用于哪些元素？？？
* alt
- 图片不能显示时的替代说明文字
- 仅可用于图片元素？？？
## prototype 和 __proto__ 的关系是什么
* prototype 用于访问函数的原型对象。
* __proto__ 用于访问对象实例的原型对象
## new 一个对象内部做了什么？
* function Test(){}
const test = new Test()
* 创建一个新对象
- const obj = {}
* 设置新对象的 constructor 属性为构造函数的名称，设置新对象的 __proto__ 属性指向构造函数的 prototype 对象
- obj.constructor = Test
obj.__proto__ = Test.prototype
* 调用构造函数，并将 this 指向新对象
- Test.call(obj)
* 将初始化完毕的新对象地址，保存到等号左边的变量中
- test = obj
## 实现 compose 函数
* compose 的参数是函数，返回的也是一个函数
* 因为除了第一个函数的接受参数，其他函数的接受参数都是上一个函数的返回值，所以初始函数的参数是多元的，而其他函数的接受值是一元的
* compsoe 函数可以接受任意的参数，所有的参数都是函数，且执行方向是自右向左的，初始函数一定放到参数的最右面
## 函数柯里化的优点和实现
* 优点
- 参数复用
- 提前返回
- 延迟计算/运行
## async 和 Generator 的关系，如何使用 Generator 实现 async
## 事件委托
* 事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。使用事件委托的一个好处就是可以节省内存。
## HTML语义化 
* 页面结构化
- 结构清晰
	- 便于开发人员阅读
- 便于浏览器、搜索引擎解析
- 不以CSS为依赖前提，保证HTML内容为易读的文档格式
## iframe的作用、优缺点
* 作用、优点
- 解决加载缓慢的第三方内容如图标和广告等的加载问题
- Security sandbox
- 并行加载脚本
* 缺点
- iframe会阻塞主页面的Onload事件
- 即使内容为空，加载也需要时间
- 没有语意
	- 语义？？？
## css选择器优先级
* !important > 行内样式（比重1000）> ID 选择器（比重100） > 类选择器（比重10） > 标签（比重1） > 通配符 > 继承 > 浏览器默认属性
- !important？？？
- 行内样式？？？
- 通配符？？？
## 垂直居中的实现方式
* 单行文本: 
- line-height = height
* 图片:
-  vertical-align: middle;
* flex:
-  display:flex;
- margin:auto
* absolute 定位: 
- top: 50%;left: 50%;
- transform: translate(-50%, -50%);
## CSS中 link和@import的异同
* link 是 XHTML 标签，除了加载CSS外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
link 支持使用 Javascript 控制 DOM 去改变样式；而@import不支持。
* link
- 属于XHTML标签
	- 可定义RSS等其他事务
	- 无浏览器兼容问题
- 对应的CSS载入和页面载入同时进行
- 支持JS控制DOM以改变样式
* @import
- 属于CSS语法
	- 只能用于加载CSS
	- 低版本浏览器不支持
- 对应的CSS载入发生在页面加载完成后
- 不支持利用JS修改样式
## rgba和opacity的异同
* 同
- 为元素附加透明效果
* 异
- opacity属性会传递到后代元素
- rgba属性仅作用于当前元素
## display： none 和visibility： hidden的区别
* display： none
- 效果同去掉该元素
* visibility： hidden
- 效果为该元素不可见
- 相当于一个同样大小的空白元素
## position的原点
* relative
- 相对于自己本身在正常文档流中的位置进行定位
* absolute
- 相对于最近一级定位不为static的父元素进行定位
* fixed
- （老版本IE不支持）生成绝对定位，相对于浏览器窗口或者frame进行定位。
* static
- 默认值，没有定位，元素出现在正常的文档流中。
* sticky
- 生成粘性定位的元素，容器的位置根据正常文档流计算得出。
* 具体的示例？？？
## HTML5的新属性
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
## CSS3的新属性
* 2d，3d变换
* Transition, animation
* 媒体查询
* 新的单位（rem, vw，vh 等）
* 圆角（border-radius），阴影（box-shadow），对文字加特效（text-shadow），线性渐变（gradient），旋转（transform）transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
* rgba
## BFC
* Block Formatting Contexts
- 属于“普通流”
- 元素排列按照HTML文档中的顺序，从左到右，从上到下排列
* 触发BFC特性的条件
- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)
## 常见的浏览器兼容问题
* 浏览器默认的margin和padding不同。
- 解决方案是加一个全局的*{margin:0;padding:0;}来统一。
* Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
- 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.
## 判断一个值是什么类型有哪些方法？
* typeof 运算符
* instanceof 运算符
* Object.prototype.toString 方法
## 值为undefined的情况
* （1）变量被声明了，但没有赋值时，就等于undefined。   
* （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
* （3）对象没有赋值的属性，该属性的值为undefined。
* （4）函数没有返回值时，默认返回undefined。
## 怎么判断一个变量arr的话是否为数组
* (typeof 只能判断其为object）
* arr instanceof Array
* arr.constructor == Array
* Object.protype.toString.call(arr) == '[object Array]'
## eval是做什么的？
* 它的功能是把对应的字符串解析成 JS 代码并运行；
* 应该避免使用 eval，不安全，非常耗性能（2次，一次解析成 js 语句，一次执行）。
## 简要介绍JSON
* JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小。例：
{'age':'12', 'name':'back'}
## documen.write 和 innerHTML 的区别？
* document.write 只能重绘整个页面
* innerHTML 可以重绘页面的一部分（任意部分？？？）
- innerHTML也能重绘整个页面？？？
## 闭包
* 定义
- 作为返回值的函数？？？
- 闭包是指有权访问另一个函数作用域中的变量的函数
* 特性
- 函数嵌套函数
- 函数内部可以引用外部的参数和变量
- 参数和变量不会被垃圾回收机制回收
* 使用场景
- 设置私有变量的方法
* 缺点
- 占内存
- 可能造成内存泄漏
## avascript的内存(垃圾)回收机制？
* 标记清除方法(mark and sweep),
- 当变量进入环境标记为进入环境，离开环境标记为离开环境
- 垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
* 引用计数方法(reference counting)
- 当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。
* 在IE中JavaScript对象通过标记清除的方式进行垃圾回收，但BOM与DOM对象却是通过引用计数回收
## 原型链
* instance.constructor.prototype = instance.proto
## MVVM开发模式
* Model（数据模型）、View（UI视图）、ViewModel
* Model和View以ViewModel为中间层传递变化、影响
* 优点/作用
- 开发者只需专注于数据的维护，不需要自己操纵dom
## SPA单页（vue相关）
* single-page application
- 仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页> 面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 > HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。
* 优点
- 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
- 对服务器压力小；
- 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
* 缺点
- 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一> 加载，部分页面按需加载；
- 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所> 有的页面切换需要自己建立堆栈管理；
- SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
## 常见的浏览器内核有哪些？
* ”内核“
- 浏览器引擎分为”渲染引擎“和”JS引擎“，”内核“一般指”渲染引擎“
- 引擎分类
	- 渲染引擎
		- 负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
	- JS引擎
		- 解析和执行javascript来实现网页的动态效果。
* 内核分类
- Trident 内核：IE, MaxThon, TT, The World, 360, 搜狗浏览器等。[又称 MSHTML]
- Gecko 内核：Netscape6 及以上版本，FF, MozillaSuite / SeaMonkey 等
- Presto 内核：Opera7 及以上。 [Opera内核原为：Presto，现为：Blink;]
- Webkit 内核：Safari, Chrome等。 [ Chrome的：Blink（WebKit 的分支）]
## 常见网页优化
* 1.压缩 css, js, 图片
* 2.减少 http 请求次数， 合并 css、js 、合并图片（雪碧图）
* 3.使用 CDN
- ？？？
* 4.减少 dom 元素数量
* 5.图片懒加载
- ？？？
* 6.静态资源另外用无 cookie 的域名
* 7.减少 dom 的访问（缓存 dom）
* 8.巧用事件委托
- ？？？
* 9.样式表置顶、脚本置低
* 其他方式？？？
## 网页从输入网址到渲染完成经历了哪些过程？
* 1.输入网址；
* 2.发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
* 3.与web服务器建立TCP连接；
* 4.浏览器向web服务器发送http请求；
* 5.web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
* 6.浏览器下载web服务器返回的数据及解析html源文件；
* 7.生成DOM树，解析css和js，渲染页面，直至显示完成；
##  线程与进程的区别？
* 一个程序至少有一个进程,一个进程至少有一个线程.
* 线程的划分尺度小于进程，使得多线程程序的并发性高。
* 另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。
* 线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。
* 从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。
## HTTP常见的状态码？
* 100 Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
* 200 OK 正常返回信息
* 201 Created 请求成功并且服务器创建了新的资源
* 202 Accepted 服务器已接受请求，但尚未处理
* 301 Moved Permanently 请求的网页已永久移动到新位置。
* 302 Found 临时性重定向。
* 303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
* 304 Not Modified 自从上次请求后，请求的网页未修改过。
* 400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
* 401 Unauthorized 请求未授权。
* 403 Forbidden 禁止访问。
* 404 Not Found 找不到如何与 URI 相匹配的资源。
* 500 Internal Server Error 最常见的服务器端错误。
* 503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
## 图片懒加载
* 当页面滚动的时间被触发 -> 执行加载图片操作 -> 判断图片是否在可视区域内 -> 在，则动态将data-src的值赋予该图片
*XMind: ZEN - Trial Version*