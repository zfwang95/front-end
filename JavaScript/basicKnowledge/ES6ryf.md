# ECMAScript 6 入门
## 特色/个人评价
* 比较详细，贴近实际使用
* 应该不太适合作为面试题的基础补充，相关知识点重合度不高
## 变量的解构赋值
* 数组的解构赋值
  - 解构的示例
    - let [a, b, c] = [1, 2, 4];
    - let [a, b] = [1, 3, 5];
    - let [a, b, c] = [1, 3];
* 对象的解构赋值
* 字符串的解构赋值
* 数值和布尔值的解构赋值
* 函数参数的解构赋值
* 圆括号问题
* 用途
## 字符串的扩展
* 字符的 Unicode 表示法
  - "\u0061"  // "a"
* 字符串的遍历器接口
  - for (let codePoint of 'foo') {
    console.log(codePoint)
  }
* 直接输入 U+2028 和 U+2029
  - 解决的问题：
    - 字符串中的转义字符在json中会被JSON.parse视为正常字符解析，而U+2028：行分隔符（line separator）和U+2029：段分隔符（paragraph separator）即需要转义字符以进行表示又被禁止用Unicode 码点表示
  - 现在的表现
    - ES2019 允许 JavaScript 字符串直接输入 U+2028（行分隔符）和 U+2029（段分隔符）
    `const PS = eval("'\u2029'");`
* JSON.stringify() 的改造
* 模板字符串
* 实例：模板编译
* 标签模板
* 模板字符串的限制
## 字符串的新增方法
* （暂略）
## 正则的扩展
* RegExp 构造函数
  - 正则表达式的修饰符？？？
  - ES6允许修改修饰符
* 字符串的正则方法
  - 字符串对象共有 4 个方法可以使用正则表达式：match()、replace()、search()和 split()，ES6将这4个方法全都定义在RegExp对象上
* u 修饰符
  - ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于`\uFFFF`的 Unicode 字符。
* RegExp.prototype.unicode 属性
* y 修饰符
* RegExp.prototype.sticky 属性
* RegExp.prototype.flags 属性
* s 修饰符：dotAll 模式
* 后行断言
* Unicode 属性类
* 具名组匹配
* 正则匹配索引
* String.prototype.matchAll()
## 数值的扩展
## 函数的扩展
## 数组的扩展
## 对象的扩展
## 对象的新增方法
## 运算符的扩展
* 指数运算符
* 链判断运算符
  - ES2020 引入了“链判断运算符”（optional chaining operator）?.
## Symbol
* 概述
  - 可以理解为独一无二的字符串，不与任何其他值相等
  - 可用做属性名，避免与已有属性名重复
* Symbol.prototype.description
* 作为属性名的 Symbol
* 实例：消除魔术字符串
* 属性名的遍历
* Symbol.for()，Symbol.keyFor()
* 实例：模块的 Singleton 模式
* 内置的 Symbol 值
## Set 和 Map 数据结构
## Proxy
## Reflect
## Promise 对象
## Iterator 和 for...of 循环
## Generator 函数的语法
## Generator 函数的异步应用
## async 函数
## Class 的基本语法
## Class 的继承
## Module 的语法
## Module 的加载实现
## 编程风格
## 读懂规格
## 异步遍历器
## ArrayBuffer
## 最新提案
## Decorator