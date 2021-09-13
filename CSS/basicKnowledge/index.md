# 入门
## 一、CSS基本介绍
### 1.CSS版本及特性
#### ——CSS3的新属性
* 2d，3d变换
* Transition, animation
* 媒体查询
* 新的单位（rem, vw，vh 等）
* 圆角（border-radius），阴影（box-shadow），对文字加特效（text-shadow），线性渐变（gradient），旋转（transform）transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
* rgba
### 2.文件引用
—— CSS中 link和@import的异同
* link 是 XHTML 标签，除了加载CSS外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。Link 支持使用Javascript 控制 DOM 去改变样式；而@import不支持。
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
### 3.CSS预处理器
## 二、基本概念
### 1.盒子模型
* 基本要素
  - content —— 内容
  - padding —— 填充
  - margin —— 边界
  - border —— 边框
* 不同类型的特征
  - IE盒子模型 —— width和height包含了padding和border
  - W3C盒子模型
### 2.定位和布局
#### ——BFC
* Block Formatting Contexts
- 属于“普通流”
- 元素排列按照HTML文档中的顺序，从左到右，从上到下排列
* 触发BFC特性的条件
- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)
****
### 3.简写属性
### 4.层叠与继承
* css选择器优先级
  - !important > 内联属性（比重1000）> ID 选择器（比重100） > 类选择器、伪类（比重10） > 标签、伪元素（比重1） > 通配符（*） > 继承 > 浏览器默认属性
****
### 5.选择器
* 基本类型
- 基本选择器
	- *
	- elementname
	- .classname
	- #idname
	- [attr]
- 分组选择器
	- ,
- 组合选择器
	- A B
	- A > B
	- A ~ B
	- A + B
	- A || B
- 伪选择器
	- :
	- ::
### 6.值和单位
### 7.内容/整体样式（文字、图片、整个元素......）
### 8.图片格式、编码
### 9.媒体查询
### 10.内容溢出的处理/滚动
### 11.替换元素
## 三、经典案例、具体问题

# 进阶
### 1.样式初始化
### 2.清除浮动
### 3.CSS性能优化
### 4.浏览器解析过程、兼容问题
### 5.动态页面