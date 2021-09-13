### 知识体系参考结构

## 一、浏览器
### 1.浏览器基础
#### ——浏览器缓存策略是怎样的
#### ——网页从输入网址到渲染完成经历了哪些过程？
* 1.输入网址；
* 2.发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
* 3.与web服务器建立TCP连接；
* 4.浏览器向web服务器发送http请求；
* 5.web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
* 6.浏览器下载web服务器返回的数据及解析html源文件；
* 7.生成DOM树，解析css和js，渲染页面，直至显示完成；
#### —— 线程与进程的区别？
* 一个程序至少有一个进程,一个进程至少有一个线程.
* 线程的划分尺度小于进程，使得多线程程序的并发性高。
* 另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。
* 线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。
* 从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。
#### ——渲染合成层是什么？？？
https://www.kancloud.cn/surahe/front-end-notebook/944479#_33
#### ——常见的浏览器内核有哪些？
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
### 2.浏览器兼容
#### ——transpiling（浏览器适配）
- transforming + compiling
- 作用：
	- 将浏览器暂不支持的新语法转换成旧一些的可直接使用的语法
- 使用方式：
	- 在build的过程中加入transpiler
- 知名的transpiler
	- babel
		- 将 ES6 编译到 ES5
	- traceur
		- 将 ES6,ES7 等编译到 ES5
#### ——常见的浏览器兼容问题
* 浏览器默认的margin和padding不同。
- 解决方案是加一个全局的*{margin:0;padding:0;}来统一。
* Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
- 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.

## 二、JSON
#### ——简要介绍JSON(PracticalApplication)
* JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小。例：
{'age':'12', 'name':'back'}
****
## 三、前端框架
### 1.MVVM
#### ——MVVM开发模式
* Model（数据模型）、View（UI视图）、ViewModel
* Model和View以ViewModel为中间层传递变化、影响
* 优点/作用
- 开发者只需专注于数据的维护，不需要自己操纵dom
## 四、HTTP/HTTPS、TCP
#### ——http/https，tcp
* https的加密过程？？？
* 三次握手过程
* 如何判断链表是否有环
* http2.0有哪些改进？？？有什么不足？？？
* http3.0简介
#### ————HTTP常见的状态码？
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

## 五、页面性能优化
### 1.基础
#### ——常见网页优化
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
### 2.图片懒加载
#### ————图片懒加载
* 当页面滚动的时间被触发 -> 执行加载图片操作 -> 判断图片是否在可视区域内 -> 在，则动态将data-src的值赋予该图片
### 3.缓存
#### ——什么是缓存及它有什么作用？（综合）
* 避免重复获取同一数据，浪费资源
* 缓存是建立一个函数的过程，这个函数能够记住之前计算的结果或值。使用缓存函数是为了避免在最后一次使用相同参数的计算中已经执行的函数的计算。这节省了时间，但也有不利的一面，即我们将消耗更多的内存来保存以前的结果。
#### ——什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）
* 需求来源：网站向服务器请求的时候，会自动带上cookie这样增加表头信息量，使请求变慢。如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server，非常浪费带宽，所以不如隔离开，静态资源放CDN<font color="red">(CDN？)</font>。因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。同时这种方式不会将cookie传入WebServer，也减少了WebServer对cookie的处理分析环节，提高了webserver的http请求的解析速度。
* 总之就是通过CDN获取资源，具体的没查到。
#### ——cookie、token和session的区别
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
### 4.函数执行/触发控制
#### ——防抖和节流函数
### 5.常见问题
#### ——解决具体问题
* 如何减少白屏时间
* 如何定位内存泄漏

## 六、Web API
#### ——Element.getBoundingClientRect()
- 返回DOMRect对象，数据为该元素的 CSS 边框大小、位置信息
	- DOMRect对象？？？
#### ——UI events
- 鼠标事件
- 键盘事件
#### ——eval是做什么的？
* 它的功能是把对应的字符串解析成 JS 代码并运行；
* 应该避免使用 eval，不安全，非常耗性能（2次，一次解析成 js 语句，一次执行）。

## 七、手动实现经典功能
#### ——实现某一方法
* 实现 add(1)(2)(3)
* es5实现继承
* 实现一个promise
* 通过二分查找求解平方根
* 实现一个发布订阅模式

#### ——实现 compose 函数（JS方法实现）
* compose 的参数是函数，返回的也是一个函数
* 因为除了第一个函数的接受参数，其他函数的接受参数都是上一个函数的返回值，所以初始函数的参数是多元的，而其他函数的接受值是一元的
* compsoe 函数可以接受任意的参数，所有的参数都是函数，且执行方向是自右向左的，初始函数一定放到参数的最右面

#### ——奇偶判断的一种实现（JS）
	  - function odd(n) { return n != 0 && even(n - 1)};
function even(n) { return n == 0 || odd(n - 1)}

#### ——判断字符串是否同态（算法题）
- 字符串同态的定义
	- 字符串A的每个字符按顺序能唯一映射到字符串B的字符
- 基本思路：
	- 逐一字符对照比较
	- 过程中剔除不符合定义的情况，逐一筛选的过程全部通过的才判定为同态
	- 另建一个对象储存映射关系
	- 单个字符的判断流程：
		- 正向判断映射是否存在
			- 是
				- 是否符合映射
					- 是
						- 符合规则，继续下一组判断
					- 否
						- 判定为不合规则
			- 否
				- 反向判断映射是否存在
					- 是
						- 判定为不合规则
					- 否
						- 新建映射，继续下一组判断
#### ——手动实现`Array.prototype.map`方法（手动实现JS中的方法）
* map方法对传入的func的要求？？？
  * func的传参只能有一个？？？
* 一个不确定的传参的函数在调用时万一传多了或传少了是否可以正常调用？？？
* 输入
  * （[a,b,c], func)
* 输出
  * [func(a), func(b), func(c)]
  * 参考答案中输出为：[func(a, indexof(a), [a,b,c]), 
func(b, indexof(b), [a,b,c]), 
func(c, indexof(c), [a,b,c])]
#### ——手动实现`Array.prototype.filter`方法（手动实现JS中的方法）
* 输入
  * （[a,b,c], func)
    * func满足：输出为boolean
* 输出
  * a,c
    * （输出满足func(x) === true的x参数）
#### ——手动实现`Array.prototype.reduce`方法（手动实现JS中的方法）
* 输入
  * ([a,b,c], func, initValue)
    * initValue可不传入
* 输出
  * initValue !== undefined
    * x = func(initValue, a);
y = func(x, b);
z = func(y,c);
return z
  * initValue === undefined
    * x = func(a,b);
y = func(x,c);
return y
#### ——手动实现缓存方法（综合）
* 接收一个参数的缓存
  * function memoize(fn) {
const cache = {};
return function (param) {
  if (cache[param]) {
    console.log('cached');
    return cache[param];
  } else {
    let result = fn(param);
    cache[param] = result;
    console.log(`not cached`);
    return result;
  }
}
}
const toUpper = (str ="")=> str.toUpperCase();
const toUpperMemoized = memoize(toUpper);
toUpperMemoized("abcdef");
toUpperMemoized("abcdef");
* 接收多个参数的缓存
  * const slice = Array.prototype.slice;
function memoize(fn) {
const cache = {};
return (...args) => {
  const params = slice.call(args);
  console.log(params);
  if (cache[params]) {
    console.log('cached');
    return cache[params];
  } else {
    let result = fn(...args);
    cache[params] = result;
    console.log(`not cached`);
    return result;
  }
}
}
const makeFullName = (fName, lName) => `${fName} ${lName}`;
const reduceAdd = (numbers, startingValue = 0) => numbers.reduce((total, cur) => total + cur, startingValue);
const memoizedMakeFullName = memoize(makeFullName);
const memoizedReduceAdd = memoize(reduceAdd);
memoizedMakeFullName("Marko", "Polo");
memoizedMakeFullName("Marko", "Polo");
memoizedReduceAdd([1, 2, 3, 4, 5], 5);
memoizedReduceAdd([1, 2, 3, 4, 5], 5);