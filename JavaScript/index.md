# JavaScript

## 背景知识
* ECMAScript
  * ES6
    * ES6泛指ES5.1以后的“下一代JS”
      * ES2015即ES6.0
      * ES2016即ES6.1
      * ES2017即ES6.2
    * ES6的发展方向：更适用于复杂、大型应用程序，成为企业级开发语言
  * ES是JS的规格（规范），JS是ES的一种实现，一般语境下二者同义
    

## JS相关工具
* Node.js
  * 作用：作为JS的服务器运行环境
* Babel——转码器
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
      * 作用：提供一个支持ES6的REPL<sup id="a1">[1](#f1)</sup> 环境（类似于命令行中python环境）
      <!-- * 作用：提供一个支持ES6的REPL[^1]环境（类似于命令行中python环境）
      [^1]: Read–eval–print loop，“读取-求值-输出”循环，也被称做交互式顶层构件，是一个简单的，交互式的编程环境。 -->
      * 安装和基本使用： （略）
    * @babel/register模块
      * 作用：实现自动对require命令加载的文件转码
      * 安装：（略）
      * 基本使用：具体步骤不明
    * polyfill（包括core-js和regenerator-runtime）
      * 作用：弥补 Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API（如 ES6 在Array对象上新增的Array.from方法） 的不足。
  * 使用Babel的注意事项
    * Babel可用于浏览器环境（开发时便于调试），但出于性能考虑，生产环境中应当加载已转码的脚本。

## 基本概念
* （零散，待整理）
  * TDZ(Temporal Dead Zone， 暂时性死区)：代码块内，在使用let/const声明某一变量之前，该变量不可用（哪怕有一个同名的全局变量）。
  * let/const不允许在一个作用域中重复声明变量（多次声明的变量名称相同），包括与var的声明重复且不论先后。即只有始终用var声明变量导致的重复是合法的（可以理解为var的变量提升带来的特性）。
  * ES6新增的块级作用域语法使得IIFE不再必要。（不必依赖于函数进行变量的作用域限制）
  * 冻结对象不能用const，需用`object.freeze()`
  * ES6声明对象的6种方法：
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
    <!-- * 顶层对象的属性和全局变量的等价[^2]关系：
    [^2]:顶层对象的属性和全局变量等价的具体例子：
        ```Javascript
        var a = 'd';
        console.log(window.a) // d
        ``` -->
      * 顶层对象的属性和全局变量的等价<sup id="a2">[2](#f2)</sup>关系：  
      
      |ES版本(声明方式)|是否等价|
      |---|---|
      |ES5|yes|
      |ES6(var/function)|yes|
      |ES6(let/const/class)|no|
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
      * ES2020 在语言标准的层面，引入globalThis作为顶层对象。也就是说，任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。
## 函数特别篇
### 


### 注释：
 <b id="f1">1</b> Read–eval–print loop，“读取-求值-输出”循环，也被称做交互式顶层构件，是一个简单的，交互式的编程环境。 [↩](#a1)  
 <b id="f2">2</b>顶层对象的属性和全局变量等价的具体例子：  
  ```Javascript
  var a = 'd';
  console.log(window.a) // d
  ```
  [↩](#a2)