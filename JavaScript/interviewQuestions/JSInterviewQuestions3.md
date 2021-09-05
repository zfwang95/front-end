# 面试题
## JS
https://cloud.tencent.com/developer/article/1621572
### undefined 和 null 有什么异同？
- 均为虚值(转换为布尔值后为false的值)
- undefined对应的不同情形
  - 未指定特定值的变量的默认值
  - 或者没有显式返回值的函数
  - 还包括对象中不存在的属性
- null的具体例子
  - 未捕获到错误时“e”的值
### && 运算符能做什么
- 条件语句中表示“且”的关系
- 在表达式中直接使用可代替if语句
  * 具体例子？？？
### || 运算符能做什么
- 条件语句中表示“或”的关系
- 在表达式中直接使用可为变量赋予默认值，尤其是在函数中
### 使用 + 或一元加运算符是将字符串转换为数字的最快方法吗？
- 一元加运算符（即+）
- 是最快的（根据MDN文档）
### DOM 是什么？
- document object model
- 是 HTML 和 XML 文档的接口(API)
- 当浏览器第一次读取(解析)HTML文档时，它会创建一个大对象，一个基于 HTM L文档的非常大的对象，这就是DOM。
- 它是一个从 HTML 文档中建模的树状结构
- DOM 用于交互和修改DOM结构或特定元素或节点。
- JS 中的document对象表示DOM
- 将html表示为分层的DOM节点
- 提供DOM API对DOM节点进行各类操作
### 什么是事件传播?
- 事件在window和目标元素之间的各个层级之间传播
- 事件传播有三个阶段：
  * 捕获阶段–事件从 window 开始，然后向下到每个元素，直到到达目标元素。
  * 目标阶段–事件已达到目标元素。
  * 冒泡阶段–事件从目标元素冒泡，然后上升到每个元素，直到到达 window。
### 什么是事件冒泡
- html元素对应的事件，从最开始的内层起，逐层向外产生影响
- 在示例中，似乎是目标元素的事件可以在其和window之间的任何元素捕获到
### 什么是事件捕获？
* 和事件冒泡的区别？除了事件传递的方向不同
### event.preventDefault() 和 event.stopPropagation()方法之间有什么区别？
* event.preventDefault() 方法可防止元素的默认行为
* event.stopPropagation()方法用于阻止捕获和冒泡阶段中当前事件的进一步传播
### 如何知道是否在元素中使用了event.preventDefault()方法？
* 在事件对象中使用event.defaultPrevented属性，根据对应的boolean值判断
### 事件以及相关的概念
### 什么是event.target？
*  event.target是发生事件的元素或触发事件的元素。
  * 例如：onclick属性意义上对应的元素，即button
### 什么是event.currentTarget？
* event.currentTarget是我们在其上显式附加事件处理程序的元素。
  * 例如：onclick属性所标记的元素，即在哪个元素上写了onclick属性并赋值
### == 和 === 有什么区别？
* ==带有默认的类型转换
  * 一般比较
* ===必须值、类型完全一致时才能为true
  * 严格比较
### 为什么在 JS 中比较两个相似的对象时返回 false？
* 将两个对象进行比较时，实际比较的是内存中的地址（指针？），而不是对象的值，而不同对象的地址必然是不同的
###  !! 运算符能做什么？
* 将非boolean类型的数据转换成boolean
### 如何在一行中计算多个表达式的值？
* 可以使用逗号运算符在一行中计算多个表达式。它从左到右求值，并返回右边最后一个项目或最后一个操作数的值。
### 什么是提升？
* 在某一位置定义的变量、函数，可以在更上面的位置进行调用
* 提升是用来描述变量和函数移动到其(全局或函数)作用域顶部的术语。
* 补充
  * 执行上下文
    * 两个阶段
      * 编译
        * JS 引荐获取所有函数声明并将其提升到其作用域的顶部，以便我们稍后可以引用它们并获取所有变量声明（使用var关键字进行声明），还会为它们提供默认值：undefined。
      * 执行
        * JS将值赋给之前提升的变量，并执行或调用函数(对象中的方法)。
### 什么是作用域？
* 变量、函数有效（可以正常调用）的范围
* 可以有效访问变量或函数的区域
* 分类
  * 全局作用域
  * 函数作用域
  * 块作用域（ES6）
* 作用域链
  * 变量的查找按该顺序进行：内部作用域->外部作用域-> 全局作用域
    * 不同作用域内存在同名变量时，优先使用内部的变量
### 什么是闭包？
* 定义在某个函数内的函数
* 使用闭包可对多层嵌套函数（即包含闭包的函数）可以分步调用、传参，且会记录和使用调用时传入的参数，逐级调用之间的已传入参数的改变不会影响闭包的行为。
* 闭包的特性本质上是作用域的性质带来的？？？
### JavaScript中的虚值是什么？
* 转换为布尔值时变为 false 的值。
### 如何检查值是否虚值？
* 使用 Boolean 函数或者 !! 运算符。
### 'use strict' 是干嘛用的？
* 放置在代码文件顶部或函数内首行，使得对应作用域内的语法检查是严格的
* "use strict" 是 ES5 特性，它使我们的代码在函数或整个脚本中处于严格模式。严格模式帮助我们在代码的早期避免 bug，并为其添加限制。
### JavaScript中 this 值是什么？
* 指代当前作用域（X）
* 基本上，this指的是当前正在执行或调用该函数的对象的值。
* 常见问题
  * this可能对应到window而不是目标对象
    * 解决方法
      * 将this保存在变量中
      * 使用箭头函数（自动复制所在作用域中的this值）
* 其他特性？？？
### 对象的 prototype 是什么？
* 原型就是对象的蓝图。如果它存在当前对象中，则将其用作属性和方法的回退。它是在对象之间共享属性和功能的方法，这也是JavaScript实现继承的核心。
* 原型链
  * 原型链的末尾是Object.prototype
  * 调用对象的属性时，会循着原型链逐级向上查找，从而在JS中实现“继承”的效果
  * 其他特性？？？
### 什么是IIFE，它的用途是什么？
* 立即调用的函数表达式
* 基本格式：(function(){})()
* IIFE的一个主要作用是避免与全局作用域内的其他变量命名冲突或污染全局命名空间
### Function.prototype.apply方法的用途是什么？
* 为函数指定一个对象作为this值的对应
* 使用方式：
  * 函数无传参：
    * func.apply(obj)
  * 函数有传参：
    * func.apply(obj, [para1, para2])
### Function.prototype.call方法的用途是什么？
* 为函数指定一个对象作为this值的对应
* 使用方式：
  * 函数无传参：
    * func.apply(obj)
  * 函数有传参（和apply有区别）：
    * func.apply(obj, para1, para2)
### Function.prototype.apply 和 Function.prototype.call 之间有什么区别？
* 函数有传参时的使用方式不同
  * apply
    * func.apply(obj, [para1, para2])
    * 使用一个指定的 this 值和一个参数数组（或类数组对象）
  * call
    * func.apply(obj, para1, para2)
    * 使用一个指定的 this 值和一个参数列表
### Function.prototype.bind的用途是什么？
* bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
* 示例：
  * func2 = func1.bind(obj, para1, para2)
    * obj被指定为func2的this对象，para1、para2为func2的参数。
* 带参数的使用示例代码？？？
### 什么是函数式编程? JavaScript的哪些特性使其成为函数式语言的候选语言？
* 函数式编程（通常缩写为FP）是通过编写纯函数，避免共享状态、可变数据、副作用 来构建软件的过程。
* 函数式编程是声明式 的而不是命令式 的，应用程序的状态是通过纯函数流动的。
* 与面向对象编程形成对比，面向对象中应用程序的状态通常与对象中的方法共享和共处。
* JavaScript支持闭包和高阶函数是函数式编程语言的特点。
* 具体例子？？？
* 相关概念说明？？？
### 什么是高阶函数？
* 高阶函数是将函数作为参数或返回值的函数。
### 为什么函数被称为一等公民？
* JS中函数的重要性的体现
  * 传统函数的使用方式
    * 声明、调用
  * 可赋值
    * var func = function(){}
  * 可作为传参
    * function func(x,callback){callback();}
  * 可作为返回值
    * function(){return function(){}}
  * JavaScript中的函数还充当了类的构造函数的作用，同时又是一个Function类的实例(instance)
### 手动实现`Array.prototype.map`方法
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
### 手动实现`Array.prototype.filter`方法
* 输入
  * （[a,b,c], func)
    * func满足：输出为boolean
* 输出
  * a,c
    * （输出满足func(x) === true的x参数）
### 手动实现`Array.prototype.reduce`方法
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
### arguments 的对象是什么？
* 一个类数组对象，内容为函数传递的参数的集合
* 和数组的区别
  * arguments也支持
    * length属性
    * 通过索引表示访问单个值
  * arguments不支持
    * forEach
    * reduce
    * filter
    * map
* 注意事项
  * 箭头函数没有arguments对象
    * 箭头函数可使用rest语法获取参数
      * const func = (...args) => args;
### 如何创建一个没有 prototype(原型) 的对象？
* 可以使用Object.create方法创建没有原型的对象
* 没有原型的对象就没有Object.prototype所带的方法可用了（是Object.prototype所带的方法？？？）
### 回调函数
* 作为某个函数参数的函数
* 回调函数是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。
  * 需要的时候方便调用，例子？
    * 示例：btnAdd.addEventListener('click', function clickCallback(e) {
  // do something useless
});
      * 把期望发生的操作封装为函数，满足一定条件后再触发
### ECMAScript是什么？
* javascript的统一标准？？？
* ECMAScript 是编写脚本语言的标准，这意味着JavaScript遵循ECMAScript标准中的规范变化，因为它是JavaScript的蓝图。
ECMAScript 和 Javascript，本质上都跟一门语言有关，一个是语言本身的名字，一个是语言的约束条件
只不过发明JavaScript的那个人（Netscape公司），把东西交给了ECMA（European Computer Manufacturers Association），这个人规定一下他的标准，因为当时有java语言了，又想强调这个东西是让ECMA这个人定的规则，所以就这样一个神奇的东西诞生了，这个东西的名称就叫做ECMAScript。
javaScript = ECMAScript + DOM + BOM（自认为是一种广义的JavaScript）
### Promise 是什么？
* Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
* 作用：
  * 避免“回调地狱”
    * 如果我们在回调内部有另一个异步操作，则此方法存在问题。我们将有一个混乱且不可读的代码。此代码称为“回调地狱”。
* 使用示例：
  * const newPromise = new Promise(() => {})
newPromise.then(() => {})
  * （还是不理解）？？？
### ES6或ECMAScript 2015有哪些新特性？？？（需要逐个确认一下具体定义、用法）
* 箭头函数
  * ()=>{}
* 类
  * class{}
* 模板字符串
  * `${}`
* 加强的对象字面量
  * ？？？
* 对象解构
  * {a, b} = c
* Promise
  * ？？？
* 生成器
  * ？？？
* 模块
  * ？？？
* Symbol
  * ？？？
* 代理
  * ？？？
* Set
  * ？？？
* 函数默认参数
  * ？？？
* rest 和展开
  * ？？？
* 块作用域
  * {}
### 什么是 `async/await` 及其如何工作？
* async/await是 JS 中编写异步或非阻塞代码的新方法。它建立在Promises之上，相对于 Promise 和回调，它的可读性和简洁度都更高。
* 示例：
  * promise版
    * function callApi() {
return fetch("url/to/api/endpoint")
  .then(resp => resp.json())
  .then(data => {
    //do something with "data"
  }).catch(err => {
    //do something with "err"
  });
}
  * async/await版
    * async function callApi() {
try {
  const resp = await fetch("url/to/api/endpoint");
  const data = await resp.json();
  //do something with "data"
} catch (e) {
  //do something with "err"
}
}
* 更多的例子、具体的使用场景、作用？？？
### `var`,`let`和`const`的区别是什么
* var有变量提升
* var的作用域为当前作用域？？？
* let、const无变量提升，为块作用域
* let声明后值可变，const声明后值不可变
### 什么是箭头函数？
* 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
### 类？
* 类(class)是在 JS 中编写构造函数的新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型的继承。
  * JS中的constructor有点类型Python中的self方法
### 模版字符串？
* `${expr} something`
* 和python类似，可以避免使用转义字符
* 还可以避免使用'\n'
### 对象解构？
* {a, b} = c
* 方便提取已有对象的属性
### ES6模块？
* import，类似python
* 需要export
* ES5中需要使用require方法完成导入
### 什么是`Set`对象，它是如何工作的？
* Set 对象允许你存储任何类型的唯一值（自动去重复），无论是原始值或者是对象引用。
* 创建
  * const set1 = new Set();
  * const set2 = new Set(["a","b","c","d","d","e"]);
* 添加新值
  * set2.add("f");
  * set2.add("g").add("h").add("i").add("j").add("k").add("k");
* 查询是否存在
  * set2.has("a") // true
  * set2.has("z") // true
* 获取长度
  * set2.size
* 清空数据
  * set2.clear()
* 用途
  * 方便地对数组去重复
    * 示例：const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)]; // [1,2,3,4,5,6,7,8]
### 展开(Spread)运算符和剩余(Rest)运算符有什么区别？
* Spread
  * 作用（使用场景）
    * 将数组展开
  * 示例
    * function add(a, b) {
return a + b;
};
const nums = [5, 6];
const sum = add(...nums);
console.log(sum);
* Rest
  * 作用（使用场景）
    * 获取数组的剩余部分
  * 示例
    * const [first, ...others] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(others); // [2,3,4,5]
* 样式上都是'...'
* 疑问
  * function add(...rest) {
return rest.reduce((total,current) => total + current);
};
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
这里的是spread还是rest？亦或都不是？
### 什么是默认参数？
* ES6新特性
* 类似python
* 示例
  * 简单示例
    * function add(a = 0, b = 0){
return a + b;
}
add(1); // returns 1 
  * 包含解构的示例
    * function getFirst([first, ...rest] = [0, 1]) {
return first;
}
getFirst();  // 0
getFirst([10,20,30]);  // 10
function getArr({ nums } = { nums: [1, 2, 3, 4] }){
  return nums;
}
getArr(); // [1, 2, 3, 4]
getArr({nums:[5,4,3,2,1]}); // [5,4,3,2,1]
  * 直接使用已定义的参数再定义新参数
    * function doSomethingWithValue(value = "Hello World", callback = () => { console.log(value) }) {
callback();
}
doSomethingWithValue(); //"Hello World"
### 什么是包装对象（wrapper object）？
* 在对基本类型调用方法时，基本类型的值被临时转换或强制转换为对象
* 除null和undefined之外的每个基本类型都有自己包装对象
### 基本类型中的BigInt
### 隐式和显式转换有什么区别？
* 显示转换通过对应的方法直接转换数据类型
* 隐式转换发生在一些语句执行的同时，如“+”法运算
### 什么是NaN？以及如何检查值是否为 NaN？
* NaN即不是数值，在数据应当作为Number类型使用时不是number类型的数据
* 在显示转换中（如parseInt()），将非数字类型的数据转换成数字的结果为“NaN”
* 如何检查值是否为 NaN
  * Number.isNan()
  * if a !== a, a is NaN
### 如何判断值是否为数组？
* Array.isArray()
* if Object.prototype.toString.call(value) === "[object Array]", value is array
* if (a instanceof Array), a is array
### 如何在不使用`%`模运算符的情况下检查一个数字是否是偶数？
* 利用“按位与”符号
  * if （num & 1), num is not even
### 如何检查对象中是否存在某个属性？
* 使用“in”操作符
* hasOwnProperty()方法
* 使用括号符号直接引用
  * a["propertyA"]
### AJAX 是什么？
* 即异步的 JavaScript 和 XML
* 是一种用于创建快速动态网页的技术
* 用到AJAX的技术：
  * HTML - 网页结构
  * CSS - 网页的样式
  * JavaScript - 操作网页的行为和更新DOM
  * XMLHttpRequest API - 用于从服务器发送和获取数据
  * PHP，Python，Nodejs - 某些服务器端语言
### 为什么typeof null返回 object？如何检查一个值是否为 null？
* typeof null == 'object'是 自 JS 诞生以来null的实现
* 可以使用严格相等运算符===来检查值是否为null
  * if value === null，value is null
### 如何在JavaScript中创建对象？
* 直接声明
  * const a = {}
* 使用函数
  * 原型
    * function Person(name) {
  this.name = name;
}
  * 实例化
    * const mark = new Person("前端小智");
  * 添加属性、方法
    * Person.prototype.greeting = function () {
  return `Hi, 我是${this.name}`;
}
* Object.create()
  * const n = {
  greeting() {
    return `Hi, 我是${this.name}`;
  }
};
const o = Object.create(n); 
o.name = "前端小智";
* 这里的“创建对象”具体是指？？？Object.create()的作用？？？（似乎有点多余）
### new 关键字有什么作用？
* new关键字与构造函数一起使用以创建对象
  * 创建空对象 {}
  * 将空对象分配给 this 值
  * 将空对象的proto指向构造函数的prototype
  * 如果没有使用显式return语句，则返回this
* 子主题 3
* 不和构造函数一起使用的情况？？？
### Object.seal 和 Object.freeze 方法之间有什么区别？
* Object.freeze()冻结对象及其原型
  * 冻结后不可增删改属性
  * 属性特性不可重新配置（属性特性：可枚举性、可配置性、可写性？？？）
  * 具体使用方法？？？
* Object.seal()阻止属性的增删
  * 可以改动原本可写的属性
  * 属性特性不可重新配置
### 什么时候不使用箭头函数? 说出三个或更多的例子？
* 当想要函数被提升时(箭头函数是匿名的)
* 要在函数中使用this/arguments时，由于箭头函数本身不具有this/arguments，因此它们取决于外部上下文
* 使用命名函数(箭头函数是匿名的)
* 使用函数作为构造函数时(箭头函数没有构造函数)
* 当想在对象字面是以将函数作为属性添加并在其中使用对象时，因为咱们无法访问 this 即对象本身。
### Object.freeze() 和 const 的区别是什么？
* Object.freeze()
  * 固定对象，不可改动属性
  * 但可以把另一个值（对象或基本类型数据）赋给被冻结的变量名
* const
  * 固定常量值（声明一个只读的变量）
  * 不能对变量名再次赋值
### 如何在 JS 中“深冻结”对象？
* 创建一个递归函数来冻结对象类型的每个属性
  * function deepFreeze(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
      let value = object[name];
      object[name] = value && typeof value === "object" ?
          deepFreeze(value) : value;
  }
  return Object.freeze(object);
}
* 使得在对象嵌套对象的情况下每一层的所有属性都不可变
### 对象中的 in 运算符和 hasOwnProperty 方法有什么区别？
* hasOwnProperty()只检查对象自身属性
* in检查整条原型链
### `Iterator`是什么，有什么作用？
* 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
* Iterator 的作用有三个
  * 为各种数据结构，提供一个统一的、简便的访问接口；
  * 使得数据结构的成员能够按某种次序排列；
  * ES6 创造了一种新的遍历命令for…of循环，Iterator 接口主要供for…of消费。
* 遍历过程
  * 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
不断调用指针对象的next方法，直到它指向数据结构的结束位置。
* 具体使用示例？
### 有哪些方法可以处理javascript中的异步代码？？？
* 回调
* Promise
* async/await
* 还有一些库：async.js, bluebird, q, co
### `Generator` 函数是什么，有什么作用？
* Generator函数可以说是Iterator接口的具体实现方式
* 执行Generator函数会返回一个遍历器对象，每一次Generator函数里面的yield都相当一次遍历器对象的next()方法，并且可以通过next(value)方法传入自定义的value,来改变Generator函数的行为。
* Generator函数可以通过配合Thunk 函数更轻松更优雅的实现异步编程和控制流管理。
* 更具体的说明？？？
### 函数表达式和函数声明之间有什么区别？
* 函数声明
  * function hoistedFunc(){
console.log("注意：我会被提升");
}
* 函数表达式
  * var notHoistedFunc = function(){
console.log("注意：我没有被提升");
}
    * 即使用了var也不会提升？？？还是只是必须用var才能提升？？？
### 调用函数，可以使用哪些方法？（原问题表错意）
* 直接使用函数名称带参数
* ？？？
### 函数可以怎么使用？（普通用法和特殊用法）
* 作为函数
* 作为对象的方法
* 构造函数
* 使用call、apply指定this
### 什么是缓存及它有什么作用？
* 避免重复获取同一数据，浪费资源
* 缓存是建立一个函数的过程，这个函数能够记住之前计算的结果或值。使用缓存函数是为了避免在最后一次使用相同参数的计算中已经执行的函数的计算。这节省了时间，但也有不利的一面，即我们将消耗更多的内存来保存以前的结果。
### 手动实现缓存方法
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
## front end
### https://github.com/h5bp/Front-end-Developer-Interview-Questions
## 进程/线程
### 主要区别
### 常见应用实例
## 面试的STAR法则
### Situation
### Task
### Action
### result