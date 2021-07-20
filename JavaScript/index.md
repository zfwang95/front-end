# JavaScript

## 基本概念
* ECMAScript
  * ES6
    * ES6泛指ES5.1以后的“下一代JS”
      * ES2015即ES6.0
      * ES2016即ES6.1
      * ES2017即ES6.2
    * ES6的发展方向：更适用于复杂、大型应用程序，成为企业级开发语言
  - ES是JS的规格（规范），JS是ES的一种实现，一般语境下二者同义
    

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
      * 作用：提供一个支持ES6的REPL[^1]环境（类似于命令行中python环境）
      [^1]: Read–eval–print loop，“读取-求值-输出”循环，也被称做交互式顶层构件，是一个简单的，交互式的编程环境。
      * 安装和基本使用： （略）
    * @babel/register模块
      * 作用：实现自动对require命令加载的文件转码
      * 安装：（略）
      * 基本使用：具体步骤不明
    * polyfill（包括core-js和regenerator-runtime）
      * 作用：弥补 Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API（如 ES6 在Array对象上新增的Array.from方法） 的不足。
  * 使用Babel的注意事项
    * Babel可用于浏览器环境（开发时便于调试），但出于性能考虑，生产环境中应当加载已转码的脚本。
## 函数特别篇
### 