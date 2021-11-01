
* 层叠（cascade）：important > 优先级 > 资源顺序
  * 资源顺序：优先级相同时，书写在最后面的规则生效
  * 优先级：内联样式（声明于style） > ID选择器 >
  类/属性/伪类选择器 > 元素/伪元素选择器
  注意：通用选择器（*）、组合（+、 >、 ~、 ' '）和否定伪类（:not）不影响优先级
  * !important置于css属性值后可使其优先级最高，同为!important再按优先级、资源顺序判定
* 盒子模型
  * 块级盒子（Block box）：
  与父容器等宽，单独占一行；
  有width、height属性；
  padding、margin、border的各个方向与其他元素互斥；
  默认为Block box的元素：`<h1>`、 ... 、`<p>`、...
  * 内联盒子（Inline box）：
  不换行；
  width、height不可用；
  padding、margin、border的特性：竖直方向和其他inline box元素不互斥，水平方向上和其他inline box元素互斥；（不互斥的具体表现？？？）
  默认为Inline box的元素：带href属性的`<a>`, `<span>`, `<strong>`
* 外边距折叠：两个相邻元素相邻border的间距实际为max(margin1, margin2)
* 样式表的优先级：用户样式表的!important声明 > 作者样式表的!important声明 > 作者样式表的常规声明 > 用户样式表的常规声明 > 用户代理样式表中的声明
作者样式表：开发人员设置的样式表
用户样式表：用户自定义的样式表
用户代理样式表：缺省值为浏览器默认样式
* 继承：一些属性会默认继承，一些属性需要额外指定继承于父元素
* 指定继承方式的属性值：
  * inherit: 与父元素相同
  * initial:按照浏览器默认样式，若不存在默认样式则按照inherit
  * unset:自然值，优先按照inherit，不支持则按照initial
  * revert:按一定优先级选定遵从的规则：user defined stylesheet > user agent style sheet > inherit > initial
* `xxx {all: inherit/initial/unset/revert}`:重设对应元素除unicode-bidi和direction以外的全部属性
* XML： ？？？
* W3C规范：？？？
* 相关工作机制：
  * 浏览器对网页的展示分为内容和样式
  * 浏览器处理文件的基本步骤：
    1. 载入HTML文件
    2. HTML转化为DOM（此后不再需要HTML？？？只使用DOM？？？）
    3. 拉取HTML相关的资源`image`、 `video`、 `css`
    4. 解析CSS，根据选择器在DOM节点上添加相应的规则、样式，生成`渲染树`
    5. （根据）渲染树按照对应规则生成布局（主语究竟是渲染树还是浏览器？？？）
    6. 网页显示于屏幕（此步名为“`着色`”）
* 常见的CSS布局
  * flex
  * absolute
  * inline-block
* 用于设定布局的属性和可选的属性值
  * display: block; inline; inline-block; flex; grid; table
  * position: static; relative; absolute; fixed; sticky; -webkit-sticky
  * float: left; right; none; inherit
  * column-count
  * column-width
* 位置相关的属性优先级：
  * top > bottom
  * `direction: ltr`时left > right ; `direction: rtl`时right > left
* 对属性赋值可使用简单的函数：`calc()`,`url()`
使用举例：`{width: calc(90% - 30px)}`,`{transform: rotate(0.8turn)}`
尤其是`transfrom`属性，一定要搭配函数使用
* `@`符号（类似装饰器）
  * `@import`：引入额外的样式表文件,例如`@import 'style2.css'`
  * `@media`：如`@media (min-width: 30em)`表示当窗口大于30em时对应规则才生效
* 速记属性：可以配置多个值，各个值各自对应某个具体的属性
例：`font`,`background`,`padding`,`border`,`margin`
注意：速记属性的缺省值会配置为对应的属性默认值，即对应属性会按照缺省值重新赋值（若之前对应属性修改过，则会发生改变）
* 通过position移动 + margin移动的方式实现居中，可以保证子元素和父元素的中心重合
* flex box的常用属性：
  ```css
  flex-direction: column/row;
  flex-wrap:
  flex:
  flex-flow:
  order:
  ```
* SVG元素：使用XML描述图形，如`<font>`（已废弃）属于SVG元素
* em: 在font-size中使用，1em对应父元素字体尺寸；在其他属性中使用，1em对应元素自身字体大小
* 实现div水平居中：
  * 法一：`div { margin: 0 auto;}`
  * 法二：`div {display: grid;}`
* box相关元素的尺寸配置的一般规定（属性值数量和四个方向尺寸的对应关系）
以margin为例：
  * 1个值对应四边：`1em`
  * 2个值依次对应上下、左右：`5% auto`
  * 3个值依次对应上、左右、下：`1em auto 2em`
  * 4个值依次对应上、右、下、左：`2px 1em 0 auto`
* sprite？？？
* csshack
* viewport的属性
* 布局、位置属性的嵌套关系（以一定的顺序查看各个属性，最终确认具体布局和位置）：
  display >> position >> float >> 元素是否为根元素（有子元素？还是指无父元素？？？）
  是否还需要考虑overflow属性？？？
  * 特殊情况下不用再查看接下去的属性（对应属性的设置无效）：
    * display为none时（position和float无效）
    * position为absolute/fixed时（float无效）（对应的display值为table/block）
  * float为none时，若元素不是根元素，display的设置无效
* display为table/block时position和float的取值？？？
* link和@import的区别
  * 共同点：作用都是引入css
  * 区别：

  |`<link>`|`@import`|
  |---|---|
  |html语法|css语法|
  |可定义rss、rel属性|只能直接导入文件|
  |css和html同时加载|html先于css加载|
  |全面兼容各种浏览器|仅IE5+能识别|
  |可在JS中使用|不能在JS中使用|
* css初始化：不同浏览器的默认样式表不同
* 设置元素浮动后，对应display的值变为block？？？
* css预处理器？？？
* 浏览器解析CSS选择器的过程？？？
* 全屏滚动的原理及相关的CSS属性？？？
* 响应式网站设计的含义、原理、对低版本IE的兼容
* 视差滚动的含义、实现方式？？？
* line-height的含义、作用？？？
* grid网格布局？？？

#### 预编译器
* SASS和SCSS的区别？？？
* SASS如何编译？？？ 

#### CSS3新特性
* 新增选择器、属性：

#### 文档流、布局
* BFC：
  * 触发条件？？？
  * BFC与普通文档流布局的区别

#### CSS工作机制
* 浏览器加载CSS、HTML的基本流程
  1. load HTML file
  2. transfer HTML file to DOM
  3. 拉取HTML相关资源（image、video、css）
  4. 处理JS
  5. 解析CSS
  6. 将解析后的规则应用于渲染树
  7. 在屏幕上显示网页（着色）
* 浏览器遇到无法解析的css会忽略对应的选择器的全部规则

#### 常用的配置操作
* 全部元素使用替代盒模型的设置方式：
  ```css
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  ```
* 居中布局？？？
* 清除浮动？？？
* border实现三角形
* 三栏布局（两边固定，中间自适应）的实现
* 实现0.5px的细线

#### 常见属性及对应属性值
  ```css
  display: block /*当前为块级元素*/
   / inline /*当前为内联元素*/
   / inline-block /*当前为行内块元素,不换行、四个方向互斥、可设置宽高*/
   / flex /*整体作为block，元素内部为flex布局*/
   / table
  background /*一次性集中定义color、image、origin、size、repeat等属性*/: green
   / url("test.jpg") repeat-y
   / border-box red
   / no-repeat center/80% url("../img/image.png")
   / ...
  backgroundcolor:
  font /*简写属性，可包含font-style、font-variant、font-weight、
  font-size、line-height、font-family，其中font-family和font-size必
  填*/: 12px/14px sans-serif /*对应为font-size/line-height font-family*/
  overflow /*简写属性*/ / overflow-x / overflow-y: hidden /*超出内容不显示，无滚动条*/
   / scroll /*采用滚动的方式处理内容溢出*/
  cursor /*指定鼠标指针悬停在当前元素上时的指针样式*/: default /*箭头样式*/
  text-rendering /*定义浏览器渲染引擎如何渲染字体（速度、清晰度、几何精度）；是SVG而非标准CSS属性，但多种主流浏览器均支持*/: optimizeLegibility /*绘制文本时注重易读性，可能会使一个单词的字母间隔很小，或者相邻字母连字*/
  -webkit-font-smoothing /*仅在Mac OSX / MacOS 下生效，起到字体抗锯齿、平滑的效果*/:
  direction /*表示文本、表列水平排列的方向*/: rtl /*右到左*/
   / ltr /*左到右*/
  text-align /*当前元素需为块元素，定义其行内内容的对齐方式*/: left
   / right
   / center 
   / justify 
   / ...
  user-selset /*是否允许用户选中当前元素及子元素的文本*/: 
  position /*决定元素的定位方式*/: absolute /*相对于最近的非static祖先元素，且不保留当前元素为static时的空间；若无非static祖先元素，则相对于viewport*/
   / static /*正常布局；此时top、left、bottom、right、z-index无效*/
   / relative /*相对于static的位置进行偏移，且保留static的空间*/
   / fixed /*相对于屏幕视口viewport，有带transform/perspective/filter属性的祖先元素时则相对该祖先元素*/
   / sticky /*先按static，再相对最近滚动祖先进行偏移（滚动后会卡在某个位置）*/
  transform /*实现元素旋转、缩放、倾斜、平移；只能用于盒模型定位元素*/: scale() /*用法：scale(sx);scale(sx, sy)*/
  top/*position的top；top、right、bottom、left决定元素的位置*/:
  left/*position的left*/:
  clear/*清除浮动；指定当前元素（在清除浮动后）是否要移动到其前面的浮动元素下方*/: both /*对应左右浮动*/
   / none
   / left
   / right
   / inline-start
   / inline-end
  box-sizing: border-box /* width = border + padding + content.width */
   / inline-box /* width = content.width; 除IE外，主流浏览器默认为inline-box*/
  visibility: collapse
  ```
