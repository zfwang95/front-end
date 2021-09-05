# 面试题  -2
## react
* setState是异步还是同步？？？
* 高阶组件的定义和举例？？？
* 原型链的基本介绍
* instanceof的原理
* react合成事件的定义、作用，和原生事件的区别
* 为什么有时react两次setState，只执行一次
* redux有哪些原则
* react如何处理异常
* fiber的作用
* redux中间件机制
* bind的实现
* generator原理
* babel简介、实现原理
## css
* position有哪些值，作用是什么？？？
  - flexy
  - fixed
  - static
  - absolute
* css选择器有哪些
  - id选择器
  - class选择器
  - 其他？？？
* flex布局的好处
* 渲染合成层是什么？？？
## js
* 介绍事件模型
* 闭包的作用和原理
  - 实现异步？？？
  - 利用作用域的特性实现参数传递？？？
* 0.1+0.2为什么不等于0.3
  - js中通过？？？储存小数，存在误差
* 模块的循环加载
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
* 趣
  - 奇偶判断的实现
	  - function odd(n) { return n != 0 && even(n   - 1) };
function even(n) { return n == 0 || odd(n   - 1) }
## html
* 简单介绍DOM树
* 重排、重绘的定义和区别
## http/https，tcp
* https的加密过程？？？
* 三次握手过程
* 如何判断链表是否有环
* http2.0有哪些改进？？？有什么不足？？？
* http3.0简介
## 浏览器
* 浏览器缓存策略是怎样的
## 实现某一方法
* 实现 add(1)(2)(3)
* es5实现继承
* 实现一个promise
* 通过二分查找求解平方根
* 实现一个发布订阅模式
## 解决具体问题
* 如何减少白屏时间
* 如何定位内存泄漏
## 其他
* 浏览器缓存策略是怎样的