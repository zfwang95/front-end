# 入门
## 一、ES背景知识
### 1.ES发展历程、版本特性
* ECMAScript
  * ES6(ES6泛指ES5.1以后的“下一代JS”)
    * 版本名称含义
      * ES2015即ES6.0
      * ES2016即ES6.1
      * ES2017即ES6.2
    * ES6的发展方向：更适用于复杂、大型应用程序，成为企业级开发语言
  * ES是JS的规格（规范），JS是ES的一种实现，一般语境下二者同义
### 2.ES相关工具的功能、用法、应用场景
#### —— Node.js
* 作用：作为JS的服务器运行环境
#### —— Babel转码器
* 作用：将ES6规则下的语句转为同义的ES5语句，以兼容不支持ES6的浏览器
* 配置文件
  * 后缀：.babelrc
  * 基本内容/格式：
  ```json
  {
    "presets": [ // 设定转码规则
      "@babel/env", // 官方提供的转码规则
      "@babel/preset-react" // 官方提供的react转码规则
    ],
    "plugins": []
  }
  ```
* Babel相关工具
  * @babel/cli（命令行转码工具）
    * 安装和基本使用： （略）
  * babel-node
    * 作用：提供一个支持ES6的REPL环境（Read–eval–print loop，“读取-求值-输出”循环，也被称做交互式顶层构件，是一个简单的，交互式的编程环境。类似于命令行中python环境）
    * 安装和基本使用： （略）
  * @babel/register模块
    * 作用：实现自动对require命令加载的文件转码
    * 安装：（略）
    * 基本使用：具体步骤不明
  * polyfill（包括core-js和regenerator-runtime）
    * 作用：弥补 Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API（如 ES6 在Array对象上新增的Array.from方法） 的不足。
* 使用Babel的注意事项
  * Babel可用于浏览器环境（开发时便于调试），但出于性能考虑，生产环境中应当加载已转码的脚本。

## 二、基础概念
### 1.作用域
* TDZ(Temporal Dead Zone， 暂时性死区)：代码块内，在使用let/const声明某一变量之前，该变量不可用（哪怕有一个同名的全局变量；如果全局变量在当前代码块內没有同名的新声明变量，则可正常使用该全局变量）。
* let/const不允许在一个作用域中重复声明变量（多次声明的变量名称相同），包括与var的声明重复且不论先后。即只有始终用var声明变量导致的重复是合法的（可以理解为var的变量提升带来的特性）。
* ES6新增的块级作用域语法使得IIFE不再必要。（不必依赖于函数进行变量的作用域限制）
### 2.变量、对象的声明和基本使用
#### —— 基础
* 冻结对象不能用const，需用`object.freeze()`
* ES6声明变量、对象的6种方法：
  * var
  * let（ES6新增）
  * const（ES6新增）
  * function
  * import（ES6新增）
  * class（ES6新增）
* 顶层对象
  * 不同环境中的顶层对象不同：
    * 浏览器环境： window对象
    * Node： global对象
    * 顶层对象的属性和（以特定声明方式声明的）全局变量的等价关系：  

    |ES版本(声明方式)|是否等价|
    |---|---|
    |ES5|yes|
    |ES6(var/function)|yes|
    |ES6(let/const/class)|no|
    * 顶层对象的属性和全局变量等价的具体例子：  
    ```javascript
      var a = 'd';
      console.log(window.a) // d
    ```
  * globalThis(使用统一名称，将顶层对象获取的兼容问题置入暗层)
    * globalThis的获取：针对不同环境用不同的名称获取顶层对象，具体示例：
    ```Javascript
    var getGlobal = function () {
      if (typeof self !== 'undefined') { return self; } // 对应browser/Web Worker
      if (typeof window !== 'undefined') { return window; } // 对应browser
      if (typeof global !== 'undefined') { return global; } // 对应Node
      throw new Error('unable to locate global object');
    };
    ```
    * ES2020 在语言标准的层面，引入globalThis作为顶层对象。也就是说，任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。（从ES2020开始直接使用globalThis就好？）
#### —— 变量的解构赋值
* 解构（destructuring）
  - 模式匹配：只要等号两边的模式相同，左边的变量就会被赋予对应的值
		`let [a, b, c] = [1, 2, 3];`
  - 如果解构不成功，变量的值就等于undefined
    `let [foo] = []; // foo为undefined`
    `let [bar, foo] = [1]; // foo为undefined`
  - 其他<font color='red'>（待补充）</font>
    - 数组
    - 对象
    - 字符串
    - 数值和布尔值
    - 函数参数的解构赋值
    - 圆括号问题
    - 为了避免被判为表达式，在使用模式时尽量不要使用圆括号（解构属于模式）。
    - 变量声明（包括函数参数声明）属于模式。

### 3.函数
#### —— 闭包
* 定义在某个函数内的函数
* 特性
  - 函数嵌套函数
  - 函数内部可以引用外部的参数和变量（可实现从上往下对外层函数内变量的获取）
  - 参数和变量不会被垃圾回收机制回收（可实现闭包所在作用域的变量独立保存于内存并独立计算）
* 使用场景
  - 设置私有变量的方法
  - 使用闭包可对多层嵌套函数（即包含闭包的函数）分步调用、传参，且会记录和使用调用时传入的参数，逐级调用之间的已传入参数的改变不会影响闭包的行为。
* 缺点
  - 占内存
  - 可能造成内存泄漏
* 闭包的特性本质上是作用域的性质带来的？？？
### 4.对象
### 5.函数和对象
### 6.函数/对象-原型链
#### —— prototype 和 __proto__ 的关系是什么（原型链）
* prototype 用于访问函数的原型对象。
* __proto__ 用于访问对象实例的原型对象
****
### 7.函数/对象-构造函数、new
#### —— 函数也可以用new生成一个对象（查一下new的基本用法？？？）
如：
```javascript
  /**
  * @param {number[]} nums
  */
  let NumArray = function(nums) {
    /* TODO */
  };

  /** 
  * @param {number} left
  * @param {number} right
  * @return {number}
  */
  NumArray.prototype.sumRange = function(left, right) {
    /* TODO */
  };

  let nums = [1, 3];
  let obj = new NumArray(nums); /* 利用函数构造对象 */
  let param_1 = obj.sumRange(0, 1);
```
### 8.数组
### 9.运算符
### 10.运算符-位运算
### 11.字符串
### 12.Set
### 13.基本类型

# 进阶
## 一、异步
### 1.Promise
#### —— promise基础
  * JS代码本身是单线程执行的，而JS中的网络操作、浏览器事件必须为异步执行
  * Promise作为构造函数，以`funcA(func1, func2){}` 为参数，生成promise对象，表达式为：`let p1 = new Promise(funcA);` 
  对promise对象的使用：`p1.then(func1).then(func2).catch(handleError)`
  注意：为了连续的then能够实现，需要func1的返回值也是promise对象
  * `Promise()`构造器用于包装不支持promise的函数，如：`new Promise((reduce, reject) => {})
  * 当异步代码执行成功时，才会调用resolve，如`p1.then(func1)`只有在p1执行成功后才会调用func1
## 二、class
## 三、Module
## 四、特殊数据结构
## 五、特殊方法/API
### 1.Iterator
### 2.Generator
## 六、深层机制
### 1.垃圾回收、内存管理
### 七、常用方法
### 八、事件
#### —— JS事件循环
  * 宏任务和微任务
  * JS单线程执行过程
  * 浏览器异步机制
# 综合


### 注释：
 <b id="f1">1</b>  [↩](#a1)  
 <b id="f2">2</b>
  [↩](#a2)