（面试题、偏向于实际应用的知识点）
# 入门
## 一、ES背景知识
### 1.ES发展历程、版本特性
#### ——什么是函数式编程? JavaScript的哪些特性使其成为函数式语言的候选语言？（JS整体特性）
* 函数式编程（通常缩写为FP）是通过编写纯函数，避免共享状态、可变数据、副作用 来构建软件的过程。
* 函数式编程是声明式 的而不是命令式 的，应用程序的状态是通过纯函数流动的。
* 与面向对象编程形成对比，面向对象中应用程序的状态通常与对象中的方法共享和共处。
* JavaScript支持闭包和高阶函数是函数式编程语言的特点。
* 具体例子？？？
* 相关概念说明？？？
#### ——ES5、ES6的区别（ES6或ECMAScript 2015有哪些新特性）
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
#### ——ECMAScript是什么？
* javascript的统一标准？？？
* ECMAScript 是编写脚本语言的标准，这意味着JavaScript遵循ECMAScript标准中的规范变化，因为它是JavaScript的蓝图。
ECMAScript 和 Javascript，本质上都跟一门语言有关，一个是语言本身的名字，一个是语言的约束条件
只不过发明JavaScript的那个人（Netscape公司），把东西交给了ECMA（European Computer Manufacturers Association），这个人规定一下他的标准，因为当时有java语言了，又想强调这个东西是让ECMA这个人定的规则，所以就这样一个神奇的东西诞生了，这个东西的名称就叫做ECMAScript。
javaScript = ECMAScript + DOM + BOM（自认为是一种广义的JavaScript）
### 2.ES相关工具的功能、用法、应用场景
****
## 二、基础概念
### 1.作用域
#### ——JS中的作用域
* 变量、函数有效（可以正常调用）的范围
* 可以有效访问变量或函数的区域
* 分类
  * 全局作用域
  * 函数作用域
  * 块作用域（ES6）
* 作用域链
  * 变量的查找按该顺序进行：内部作用域->外部作用域-> 全局作用域
    * 不同作用域内存在同名变量时，优先使用内部的变量
#### ——use strict
* 放置在代码文件顶部或函数内首行，使得对应作用域内的语法检查是严格的
* "use strict" 是 ES5 特性，它使我们的代码在函数或整个脚本中处于严格模式。严格模式帮助我们在代码的早期避免bug，并为其添加限制。
#### ——this关键字如何工作
* 基本上，this指的是当前正在执行或调用该函数的对象的值。
* 常见问题
  * this可能对应到window而不是目标对象，解决办法：
    * 将this保存在变量中
    * 使用箭头函数（自动复制所在作用域中的this值）
#### ——什么是提升？
* 在某一位置定义的变量、函数，可以在更上面的位置进行调用
* 提升是用来描述变量和函数移动到其(全局或函数)作用域顶部的术语。
* 补充：执行上下文的两个阶段
  * 编译
    * JS 引擎获取所有函数声明并将其提升到其作用域的顶部，以便我们稍后可以引用它们，同时获取所有变量声明（使用var关键字进行声明），还会为它们提供默认值：undefined。
  * 执行
    * JS将值赋给之前提升的变量，并执行或调用函数(对象中的方法)。
****
### 2.变量、对象的声明和基本使用
#### ——`Iterator`是什么，有什么作用？（Iterator）
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
#### ——最大安全数
* ES6
- BigInt
	- 可以表示任意大的整数
		- 不在有“最大安全数”
#### ——判断一个值是什么类型有哪些方法？
* typeof 运算符
* instanceof 运算符
* Object.prototype.toString 方法
#### ——`var`,`let`和`const`的区别是什么
* var有变量提升
* var的作用域为当前作用域？？？
* let、const无变量提升，为块作用域
* let声明后值可变，const声明后值不可变
#### ——JS中的值和类型
- undefined、null、boolean、number、string、symbol
- object
#### ——JS中的类型转换
- 对应英文单词：coercion
- 分类
	- 显式转换通过对应的方法直接转换数据类型
		- 通过JS自带的方法，如Number()
	- 隐式转换发生在一些语句执行的同时
		- 一些处理方式会自动转换数据类型，如乘法（*）
#### ——null和undefined的异同
- 共同点
  - 均为虚值(转换为布尔值后为false的值)
- 差异
  - undefined即未初始化，对应的具体情形：
    - 未指定特定值的变量的默认值
    - 没有显式返回值的函数
    - 对象中不存在的属性
  - null表示不可用，具体例子：
    - 未捕获到错误时“e”的值（error？event？）
#### ——undefined 和 not defined的区别
- undefined
	- 已声明、未定义
- not defined
	- 未声明、未定义
#### ——let关键字
- 声明变量
- 作用域为块作用域
- 其他？？？
****
### 3.函数
#### ——函数柯里化的优点和实现
* 柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)
* 优点
	- 参数复用
	- 提前返回
	- 延迟计算/运行
#### ——函数的一般使用和特殊使用方式（作为主体、客体）
* 作为函数
* 作为对象的方法
* 构造函数
* 使用call、apply指定this
#### ——调用函数的方式
* 声明后调用（使用函数名称并带/不带参数）
#### ——函数表达式和函数声明之间有什么区别？
* 函数声明
```javascript
  function hoistedFunc(){
    console.log("注意：我会被提升");
  }
```
* 函数表达式
```javascript
  var notHoistedFunc = function(){
    console.log("注意：我没有被提升");
  }
```
    * 即使用了var也不会提升？？？还是只是必须用var才能提升？？？
#### ——什么时候不使用箭头函数? 说出三个或更多的例子（箭头函数特性及对应的不适应场景）？
* 当想要函数被提升时(箭头函数是匿名的)
* 要在函数中使用this/arguments时，由于箭头函数本身不具有this/arguments，因此它们取决于外部上下文
* 使用命名函数(箭头函数是匿名的)
* 使用函数作为构造函数时(箭头函数没有构造函数)
* 当想在对象字面是以将函数作为属性添加并在其中使用对象时，因为咱们无法访问 this 即对象本身。
#### ——new 关键字有什么作用？
* new关键字与构造函数一起使用以创建对象
  * 创建空对象 {}
  * 将空对象分配给 this 值
  * 将空对象的proto指向构造函数的prototype
  * 如果没有使用显式return语句，则返回this
* 不和构造函数一起使用的情况？？？
#### ——回调函数
- 作为某个函数参数的函数（函数A作为参数传入函数B，则函数A为回调函数）
- 回调函数被调用是指？？？（函数B中对应代码执行的时候？）
* 回调函数是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。
  * 需要的时候方便调用，例子？
    * 示例：btnAdd.addEventListener('click', function clickCallback(e) {
  // do something useless
});
      * 把期望发生的操作封装为函数，满足一定条件后再触发
#### ——IIFEs(Immediately Invoked Function Expressions)
* 即时执行表达式
	- 如在定义函数的代码首尾以括号包裹，即定义的同时对函数进行调用
* 基本格式：(function(){})()
* IIFE的一个主要作用是避免与全局作用域内的其他变量命名冲突或污染全局命名空间
#### ——匿名函数和命名函数的区别？？？
#### ——创建私有变量
- 在函数中声明变量，则仅在函数作用域内生效
#### ——揭示模式(Revealing Module Pattern)
- 作用：
	- 代码隔离
- 使用方式
	- 函数返回值设置成一个对象，包含想暴露的变量、函数
#### ——Function.prototype.apply方法的用途是什么？
* 为函数指定一个对象作为this值的对应
* 使用方式：
  * 函数无传参：
    * func.apply(obj)
  * 函数有传参：
    * func.apply(obj, [para1, para2])
#### ——Function.prototype.call方法的用途是什么？
* 为函数指定一个对象作为this值的对应
* 使用方式：
  * 函数无传参：
    * func.apply(obj)
  * 函数有传参（和apply有区别）：
    * func.apply(obj, para1, para2)
#### ——Function.prototype.apply 和 Function.prototype.call 之间有什么区别？
* 函数有传参时的使用方式不同
  * apply
    * func.apply(obj, [para1, para2])
    * 使用一个指定的 this 值和一个参数数组（或类数组对象）
  * call
    * func.apply(obj, para1, para2)
    * 使用一个指定的 this 值和一个参数列表
#### ——Function.prototype.bind的用途是什么？
* bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
* 示例：
  * func2 = func1.bind(obj, para1, para2)
    * obj被指定为func2的this对象，para1、para2为func2的参数。
* bind后可以用call/apply覆盖？？？
#### ——什么是高阶函数？
* 高阶函数是将函数作为参数或返回值的函数。
#### ——为什么函数被称为一等公民？
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
#### ——什么是箭头函数？
* 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
#### ——什么是默认参数？
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

****
### 4.对象
#### ——对象中的 in 运算符和 hasOwnProperty 方法有什么区别？
* hasOwnProperty()只检查对象自身属性
* in检查整条原型链
#### ——如何在 JS 中“深冻结”对象？
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
#### ——Object.freeze() 和 const 的区别是什么？
* Object.freeze()
  * 固定对象，不可改动属性
  * 但可以把另一个值（对象或基本类型数据）赋给被冻结的变量名
* const
  * 固定常量值（声明一个只读的变量）
  * 不能对变量名再次赋值
#### ——Object.seal 和 Object.freeze 方法之间有什么区别？
* Object.freeze()冻结对象及其原型
  * 冻结后不可增删改属性
  * 属性特性不可重新配置（属性特性：可枚举性、可配置性、可写性？？？）
  * 具体使用方法？？？
* Object.seal()阻止属性的增删
  * 可以改动原本可写的属性
  * 属性特性不可重新配置
#### ——如何在JavaScript中创建对象？
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
#### ——如何检查对象中是否存在某个属性？
* 使用“in”操作符
* hasOwnProperty()方法
* 使用括号符号直接引用
  * a["propertyA"]
#### ——什么是包装对象（wrapper object）？
* 在对基本类型调用方法时，基本类型的值被临时转换或强制转换为对象
* 除null和undefined之外的每个基本类型都有自己包装对象
#### ——arguments 的对象是什么？
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
#### ——如何创建一个没有 prototype(原型) 的对象？
* 可以使用Object.create方法创建没有原型的对象
* 没有原型的对象就没有Object.prototype所带的方法可用了（是Object.prototype所带的方法？？？）
#### ——原型模式(Prototype Design Pattern)
- 拷贝原型链上的值或对象的值
- 具体的定义？示例？？？
##### 对象的 ——prototype 是什么？
* 原型就是对象的蓝图。如果它存在当前对象中，则将其用作属性和方法的回退。它是在对象之间共享属性和功能的方法，这也是JavaScript实现继承的核心。
* 原型链
  * 原型链的末尾是Object.prototype
  * 调用对象的属性时，会循着原型链逐级向上查找，从而在JS中实现“继承”的效果
#### ——为什么在 JS 中比较两个相似的对象时返回 false？
* 将两个对象进行比较时，实际比较的是内存中的地址（指针？），而不是对象的值，而不同对象的地址必然是不同的
#### ——对象解构？
* {a, b} = c
* 方便提取已有对象的属性
****
### 5.函数和对象
### 6.函数/对象-原型链
#### ——原型链
* instance.constructor.prototype = instance.proto
### 7.函数/对象-构造函数、new
#### ——new 一个对象内部做了什么？（构造函数、new）
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
### 8.数组
#### ——如何判断值是否为数组？
* Array.isArray()
* arr.constructor == Array
* if `Object.prototype.toString.call(value) === "[object Array]"`, value is array
* if `(a instanceof Array)`, a is array
### 9.运算符
#### ——JS中的相等判断
- ===，严格判断（严格比较），必须值、类型完全一致时才能为true
- ==，抽象判断（一般比较），带有默认的类型转换（隐式转换）
#### ——比较JS中的两个变量
- 同类型基本类型数据
	- ===
- 不同类型的基本类型数据
	- ==下可能相等
- 对象和对象（包括数组、函数）
	- 比较的是引用的地址，不同对象地址不同
- 对象和基本类型数据
	- 特例
		- 字符串和数组
			- 数组会自动拼接成字符串
##### ——&& 运算符能做什么
- 条件语句中表示“且”的关系
- 在表达式中直接使用可代替if语句
  * 具体例子？？？
##### ——|| 运算符能做什么
- 条件语句中表示“或”的关系
- 在表达式中直接使用可为变量赋予默认值，尤其是在函数中
##### ——使用 + 或一元加运算符是将字符串转换为数字的最快方法吗？
- 一元加运算符（即+）
- 是最快的（根据MDN文档）
####  ——!! 运算符能做什么？
* 将非boolean类型的数据转换成boolean
#### ——展开(Spread)运算符和剩余(Rest)运算符有什么区别？
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
****
### 10.运算符-位运算
#### ——如何在不使用`%`模运算符的情况下检查一个数字是否是偶数？（位运算）
* 利用“按位与”符号
  * if （num & 1), num is not even
### 11.字符串
#### ——模版字符串？（字符串）
* `${expr} something`
* 和python类似，可以避免使用转义字符
* 还可以避免使用'\n'
### 12.Set
#### ——什么是`Set`对象，它是如何工作的？(Set)
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
### 13.基本类型
#### ——基本类型中的BigInt（基本类型）
### 14.表达式和值
#### ——为什么typeof null返回 object？如何检查一个值是否为 null？（基本类型）
* typeof null == 'object'是 自 JS 诞生以来null的实现
* 可以使用严格相等运算符===来检查值是否为null
  * if value === null，value is null
#### ——什么是NaN？以及如何检查值是否为 NaN？（基本类型）
* NaN即不是数值，在数据应当作为Number类型使用时不是number类型的数据
* 在显示转换中（如parseInt()），将非数字类型的数据转换成数字的结果为“NaN”
* 如何检查值是否为 NaN
  * Number.isNan()
  * if a !== a, a is NaN
#### ——如何在一行中计算多个表达式的值？（JS表达式、值）
* 可以使用逗号运算符在一行中计算多个表达式。它从左到右求值，并返回右边最后一个项目或最后一个操作数的值。
#### ——JavaScript中的虚值是什么？（JS表达式、值）
* 转换为布尔值时变为 false 的值。
#### ——如何检查值是否虚值？（JS表达式、值）
* 使用 Boolean 函数或者 !! 运算符。
#### ——值为undefined的情况
* （1）变量被声明了，但没有赋值时，就等于undefined。   
* （2）调用函数时，应该提供的参数没有提供，该参数等于undefined。
* （3）对象没有赋值的属性，该属性的值为undefined。
* （4）函数没有返回值时，默认返回undefined。
#### ——小数计算的误差
* JS采用IEEE754标准，双精度浮点数，无法精确表示一些小数
* 解决方式
- 另写一个方法，先转换为整数，计算完成后再转回小数
* 特例问题
- toFixed()方法，在chrome中不满足通用的银行家舍入规则
# 进阶
## 一、异步
### 1.基础
#### ——`Generator` 函数是什么，有什么作用？（Generator）
* Generator函数可以说是Iterator接口的具体实现方式
* 执行Generator函数会返回一个遍历器对象，每一次Generator函数里面的yield都相当一次遍历器对象的next()方法，并且可以通过next(value)方法传入自定义的value,来改变Generator函数的行为。
* Generator函数可以通过配合Thunk 函数更轻松更优雅的实现异步编程和控制流管理。
* 更具体的说明？？？
#### ——async 和 Generator 的关系，如何使用 Generator 实现 async
#### ——有哪些方法可以处理javascript中的异步代码？？？
* 回调
* Promise
* async/await
* 还有一些库：async.js, bluebird, q, co
#### ——AJAX 是什么？
* 即异步的 JavaScript 和 XML
* 是一种用于创建快速动态网页的技术
* 用到AJAX的技术：
  * HTML - 网页结构
  * CSS - 网页的样式
  * JavaScript - 操作网页的行为和更新DOM
  * XMLHttpRequest API - 用于从服务器发送和获取数据
  * PHP，Python，Nodejs - 某些服务器端语言
#### ——什么是 `async/await` 及其如何工作？
* async/await是 JS 中编写异步或非阻塞代码的新方法。它建立在Promises之上，相对于 Promise 和回调，它的可读性和简洁度都更高。
* 示例：
  * promise版
  ```javascript
    function callApi() {
      return fetch("url/to/api/endpoint")
        .then(resp => resp.json())
        .then(data => {
          //do something with "data"
        }).catch(err => {
          //do something with "err"
        });
    }
  ```
  * async/await版
  ```javascript
    async function callApi() {
      try {
        const resp = await fetch("url/to/api/endpoint");
        const data = await resp.json();
        //do something with "data"
      } catch (e) {
        //do something with "err"
      }
    }
  ```
### 2.Promise
#### ——Promise 是什么？
* Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
* 作用：
  * 避免“回调地狱”
    * 如果我们在回调内部有另一个异步操作，则此方法存在问题。我们将有一个混乱且不可读的代码。此代码称为“回调地狱”。
* 使用示例：
  * const newPromise = new Promise(() => {})
newPromise.then(() => {})
  * （还是不理解）？？？
****
## 二、class
#### ——简介类（class）
* 类(class)是在 JS 中编写构造函数的新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型的继承。
  * JS中的constructor有点类型Python中的self方法
#### ——class
- class的定义方法
	- class声明
		- class声明不会提升（函数声明会提升）
	- class表达式
		- 命名
		- 匿名
		- class表达式定义的class也不会提升
- 构造函数
	- 构造函数可用super关键字调用父类的构造函数
- 原型方法
- 静态方法
	- static关键字
	- 调用时不用实例化，同时实例化后不能调用
	- （看起来像是通过class实现的对象）
	- 应用
		- 用原型和静态方法绑定 this？？？
- 实例属性
- 字段声明
	- 公有字段声明
	- 私有字段声明
- 使用extends扩展子类
- Species
- 使用super调用超类
- Mix-ins / 混入
- 参考
	- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#%E7%B1%BB%E5%A3%B0%E6%98%8E
****
## 三、Module
#### ——模块的循环加载
  - 循环加载：不同的脚本相互依赖
  - 特性
	  - 强耦合
		  - 可能导致递归加载，使得程序无法执行
  - 处理方式
	  - CommonJS
		  - CommonJS的模块加载方式
			  - CommonJS的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。
			  - 特点
				  - 加载的同时执行
		  - 处理循环加载的方式
			  - 一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
				  - 所有模块都能全部执行完成，需要留心的是执行顺序
					  - 例：a.js按顺序为a上、a加载b.js、a下，b.js按顺序为b上、b加载a.js、b下，在主程序里加载a.js（不用加载b.js），则执行顺序为a上——》b上——》b下（且对b下来说a上已执行，可取到相关值）——》a下（且对a下来说，b.js已全部执行，可取到相关值）。
如果之后再加载b.js（使得在主程序里可以使用b.js中的值），则相关数据直接从缓存中获取，不会再执行b.js。
				  - 可能的问题
					  - require太早就没有可以输出的东西了
	  - ES6
		  - 遇到模块加载命令import时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。
		  - ES6根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
			  - import越早越好，不必担心执行顺序
			  - 更贴近于代码处于同一个文件的情况
#### ——commonJS和ES6的区别
* commonJS？？？
- commonJS是模块规范，ES6中用ES6 module实现相同作用
- 子主题 2
* 区别
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJs 是单个值导出，ES6 Module可以导出多个。
- CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层。
- CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined。
#### ——循环依赖
* 两个脚本相互依赖
* 两种加载模式各自的表现
- CommonJS 的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
- ES6 根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
#### ——简介ES6模块
* import，类似python
* 需要export
* ES5中需要使用require方法完成导入
## 四、特殊数据结构
## 五、特殊方法/API
### 1.Iterator
### 2.Generator
## 六、深层机制
### 1.垃圾回收、内存管理
#### ——Javascript的内存(垃圾)回收机制？
* 标记清除方法(mark and sweep),
- 当变量进入环境标记为进入环境，离开环境标记为离开环境
- 垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
* 引用计数方法(reference counting)
- 当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。
* 在IE中JavaScript对象通过标记清除的方式进行垃圾回收，但BOM与DOM对象却是通过引用计数回收
### 七、常用方法
#### ——setTimeout对应的事件发生、函数调用的流程？？？
#### —— SetInterval能完全取代SetTimeout在多次执行中的应用吗？？？
  * SetTimeout可通过闭包实现首次间隔和后期的间隔不同

### 八、事件

# 综合
