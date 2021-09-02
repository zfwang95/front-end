# css面试题-1

## 1.标准CSS盒子模型
* 基本特性
  - 包含content、padding、border、margin四个部分
* 分类一：W3C标准盒子模型
  - width、height对应区域仅包含content
  - 解释为W3C盒子模型的情况
	  - DOCTYPE声明
* 分类二：IE盒子模型
  - width、height对应区域包含content、paddng、border
  - 解释为IE盒子模型的情况
	  - DOCTYPE缺失 && 浏览器为E8或IE8-
	  - box-sizing设为border-box

## 2.CSS选择器
* <font color="#a6a6a6">序号 选择器名称 用法</font>
* （1）id选择器（#myid）
* （2）类选择器（.myclassname）
* （3）标签选择器（div,h1,p）
* （4）后代选择器（h1 p）
* （5）相邻后代（子）选择器（ul>li）
* （6）兄弟选择器（li~a）
* （7）相邻兄弟选择器（li+a）
* （8）属性选择器（a[rel="external"]）
* （9）伪类选择器（a:hover,li:nth-child）
* （10）伪元素选择器（::before、::after）
* （11）通配符选择器（*）

## 3.::before 和:after 中双冒号和单冒号有什么区别？解释一下这两个伪元素的作用
* `:`用于伪类，`::`用于伪元素
* `:after`是CSS3之前的写法，和CSS3中的`::after`相同
* `::before`用于在当前元素前插入内容，`::after`用于在当前元素后插入内容

## 4.伪类与伪元素的区别
* 伪类
  - 选择已有元素的某种状态
  - 如：`:hover`
* 伪元素
  - 选择已有元素的一部分/创建不在文档树中的元素
  - 如：`::first-line`
  - 如：`::before`

## 5.CSS 中哪些属性可以（默认）继承
* 字体相关的属性，如`font-size`、`font-weight`。
* 文本相关的属性，如`color`、`text-align`。
* 表格的一些布局属性、列表属性,如`list-style`。
* 光标属性`cursor`、元素可见性`visibility`。

补充： inherit可以使属性强制使用父元素的相同值

## 6.CSS 优先级算法如何计算
* css规则的优先级计算方式：四个等级，从高到低依次对应：内嵌样式、id选择器、类/伪类/属性选择器、元素/伪元素选择器，每个等级独立计数，比较优先级时从高等级开始，数值大的等级高。
* !important可以覆盖优先级

## 7.关于伪类的LVHA概念的解释
* 即`<a>`的四种状态
  - `:link`       - 未访问
  - `:visited`	  - 已访问
  - `:hover`  	  - 鼠标悬停
  - `:active` 	  - 鼠标点击(按住)

补充： l、v、h、a的顺序符合实际使用中的状态顺序

## 8.CSS3 新增伪类有哪些
<font color="#a6a6a6">已是全部？ 如何概括？</font>
* （1）elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数值，也可以接受函数。
* （2）elem:nth-last-child(n)作用同上，不过是从后开始查找。
* （3）elem:last-child选中最后一个子元素。
* （4）elem:only-child如果elem是父元素下唯一的子元素，则选中之。
* （5）elem:nth-of-type(n)选中父元素下第n个elem类型元素，n可以接受具体的数值，也可以接受函数。
* （6）elem:first-of-type选中父元素下第一个elem类型元素。
* （7）elem:last-of-type选中父元素下最后一个elem类型元素。
* （8）elem:only-of-type如果父元素下的子元素只有一个elem类型元素，则选中该元素。
* （9）elem:empty选中不包含子元素和内容的elem类型元素。
* （10）elem:target选择当前活动的elem元素。
* （11）:not(elem)选择非elem元素的每个元素。
* （12）:enabled 控制表单控件的禁用状态。
* （13）:disabled 控制表单控件的禁用状态。

## 9.如何（在父元素中）居中 div
* 方案一：给div设定宽度并利用margin的auto（效果：水平居中）
  ```javascript
  div {
    width: 200px;
    margin: 0 auto;
  } //水平居中
  ```

* 方案二：为父元素指定文本居中（效果：水平居中）
  ```javascript
	.container {
    text-align: center;
  } //水平居中
  ```

* 方案三: IE盒子模型对应部分在当前元素内居中，当前元素(margin外边界)占满（非static的）祖先元素（效果:水平、上下居中）
  ```javascript
	div {
    position: absolute;
    width: 300px;
    height: 300px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  } // 效果:水平、上下居中
  ```

* 方案四：margin的左上角移到（非static的）祖先元素中心，IE盒子模型对应部分通过margin/transform移动中心到margin左上角（效果：在祖先元素中居中）
  - 利用margin
  ```javascript
  div{
    position: absolute;
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -250px;
    background-color: pink;
  }
  ```  
	- 利用transform
  ```javascript
  div {
    position: absolute; 
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: pink; 
  }
  ```
* 方案五: 利用flex布局（效果：水平、上下居中）
	```javascript
  .container {
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/
  }
  .containerdiv {
    width: 100px;
    height: 100px;
    background-color: pink; /*方便看效果*/
  }
  ```

## 10.display 有哪些值？说明他们的作用
* `block` 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
* `none` 元素不显示，并从文档流中移除。
* `inline` 行内元素类型（内联盒子）。默认宽度为内容宽度，不可设置宽高，同行显示。
* `inline-block` 默认宽度为内容宽度，可以设置宽高，同行显示。
* `list-item` 像块类型元素一样显示，并添加样式列表标记。
* `table` 此元素会作为块级表格来显示。
* `inherit` 规定应该从父元素继承display属性的值。

## 11.position 的值为 relative 和 absolute时各自的定位原点是？
* `relative`：生成相对定位的元素，相对于其元素本身所在正常位置进行定位。
* `absolute`：生成绝对定位的元素，相对于值不为static的第一个父元素的padding box进行定位，也可以理解为离自己这一级元素最近的一级position设置为absolute或者relative的父元素的padding box的左上角为原点的。

<font color="#a6a6a6">补充其他值的说明：</font>
* `fixed`（老IE不支持）：生成绝对定位的元素，相对于浏览器窗口进行定位。
* `static`：默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。
* `inherit`：规定从父元素继承position属性的值。

## 12.CSS3 有哪些新特性？
* 新增各种CSS选择器 （如：`:not(.input)`，表示所有class不是“input”的节点）
* 圆角  （`border-radius:8px`）
* 多列布局 （`multi-column` `layout`）
* 阴影和反射 （`Shadow\Reflect`）
* 文字特效  （`text-shadow`）
* 文字渲染  （`Text-decoration`）
* 线性渐变  （`gradient`）
* 旋转   （`transform`）
* 缩放，定位，倾斜，动画，多背景

## 13.请解释一下 CSS3 的 Flexbox（弹性盒布局模型），以及适用场景？
* 要点
  - 是CSS3的新增特性
  - 使用方式
    ```javascript
    .container {
      display: flex;
    }
    ```
  - 相关属性及作用
    - `flex-direction`: 指定主轴方向（水平/竖直），默认为水平方向
    - `justify-content`: 指定元素在主轴上的排列方式
    - `align-items`: 指定元素在交叉轴上的排列方式
    - `flex-wrap`: 规定当一行排列不下时的换行方式
    - `order`: 指定项目的排列顺序
    - `flex-grow`: 指定当排列空间有剩余的时，项目的放大比例
    - `flex-shrink`:指定当排列空间不足时，项目的缩小比例
  - 使用场景：多个同类型元素沿固定方向排列时，使用flexbox可以方便地调整布局

## 14.用纯 CSS 创建一个三角形的原理是什么？
* 原理：box的border的相邻边同时存在时会均分（“重合”部分会对半分并分属于不同边）
* 实际操作：仅展示border，并将一条边的两条相邻边设为透明
  ```javacript
  #demo {
    width: 0;
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: transparent transparent red transparent;
  }
  ```

## 15.一个满屏品字布局如何设计?
* 分两行，第一行为一个box居中并设定宽度为x，第二行为两个box，宽度设定为x/2，利用`{display: inline-flex}`使其不换行（如用inline需注意此时不可设定width）。

## 16.CSS 多列等高如何实现？
<font color='#ff0000'>（解释不清，差评 (〃＞目＜) ）</font>
* 方案1）利用padding-bottom|margin-bottom正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐藏（overflow:hidden），这样父容器的高度就还是它里面的列没有设定padding-bottom时的高度，当它里面的任一列高度增加了，则父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的padding-bottom补偿这部分高度差。

* 方案2）利用table-cell所有单元格高度都相等的特性，来实现多列等高。

* 方案3）利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度的特性，来实现多列等高。

## 17.经常遇到的浏览器的兼容性问题有哪些？其原因，解决方法是什么？
<font color='#ff0000'>（解释不清，差评 (〃＞目＜) ）</font>
* 兼容性问题
  - （1）png24位的图片在iE6浏览器上出现背景
	  - 解决方案：做成PNG8，也可以引用一段脚本处理。
  - （2）浏览器默认的margin和padding不同
	  - 解决方案：加一个全局的*{margin:0;padding:0;}来统一。
  - （3）IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。#box{float:left;width:10px;margin:0 0 0 10px;}这种情况之下IE会产生20px的距离
	- 解决方案：在float的标签样式控制中加入 
 `_display:inline;`将其转化为行内属性。(_这个符号只有ie6会识别)

* 渐进识别的方式，从总体中逐渐排除局部。
首先，巧妙的使用"\9"这一标记，将IE游览器从所有情况中分离出来。
接着，再次使用"+"将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
.bb{
background-color:#f1ee18;/*所有识别*/
.background-color:#00deff\9;/*IE6、7、8识别*/
+background-color:#a200ff;/*IE6、7识别*/
_background-color:#1e0bd1;/*IE6识别*/
}
（渐进识别？？？）
* （5）IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性
  - 解决方法：统一通过getAttribute()获取自定义属性。
* （6）IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有pageX、pageY属性，但是没有x、y属性。
  - 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
	  - 条件注释？？？
* （7）Chrome中文界面下默认会将小于12px的文本强制按照12px显示
  - 解决方法：
	  - 1.可通过加入CSS属性-webkit-text-size-adjust:none;解决。但是，在chrome更新到27版本之后就不可以用了。
	  - 2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75)收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用display：block/inline-block/...；
* （8）超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了
  - 解决方法：改变CSS属性的排列顺序L-V-H-A
	  - 具体怎么做？？？
* （9）怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。
  - DTD？？？

## 18.`<li>` 与 `<li>` 之间有额外的空白间隔是什么原因引起的？有什么解决办法？
* 原因：浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个`<li>`放在一行，这导致`<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。
* 各种解决办法及不足：
  - （1）为`<li>`设置`{float: left}`。  
  不足：有些容器是不能设置浮动，如左右切换的焦点图等。
  - （2）将所有`<li>`写在同一行。  
  不足：代码不美观。
  - （3）将`<ul>`内的字符尺寸直接设为0，即`{font-size: 0}`。  
  不足：`<ul>`中的其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在Safari浏览器依然会出现空白间隔。
  - （4）消除`<ul>`的字符间隔`{letter-spacing: -8px}`<font color="green">（需要确认具体使用方法）</font>  
  不足：这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认letter-spacing:normal。

## 19.为什么要初始化 CSS 样式？
* 原因：属于浏览器的兼容问题，不同浏览器中有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
* 补充说明：当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，只能力求影响最小的情况下初始化。

* 最简单的初始化方法：`*{padding: 0; margin: 0;}`（强烈不建议）

* 淘宝的样式初始化代码：
  ```javascript
  body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{
    margin: 0;
    padding: 0;
  }
  body,button,input,select,textarea{
    font: 12px/1.5 tahoma, arial, \5b8b\4f53;
  }
  h1,h2,h3,h4,h5,h6{
    font-size: 100%;
  }
  address, cite, dfn, em, var{
    font-style: normal;
  }
  code, kbd, pre, samp{
    font-family:couriernew, courier, monospace;
  }
  small{
    font-size: 12px;
  }
  ul, ol{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  sup{
    vertical-align: text-top;
  }
  sub{
    vertical-align: text-bottom;
  }
  legend{
    color: #000;
  }
  fieldset, img{
    border: 0;
  }
  button, input, select, textarea{
    font-size: 100%;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
  ```

## 20.什么是包含块，对于包含块的理解?
* 包含块（containing block）: ~~就是元素用来计算和定位的一个框~~<font color="orange">说了跟没说差不多 (〃＞目＜)</font>。
* 具体分类
  - （1）根元素（很多场景下可以看成是<html>）被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。
  - （2）对于其他元素，如果该元素的position是relative或者static，则“包含块”由其最近的块容器祖先盒的content box边界形成。
  - （3）如果元素position:fixed，则“包含块”是“初始包含块”。
  - （4）如果元素position:absolute，则“包含块”由最近的position不为static的祖先元素建立，具体方式如下：
    * 如果该祖先元素是纯inline元素，则规则略复杂：
      - 假设给内联元素的前后各生成一个宽度为0的内联盒子（inline box），则这两个内联盒子的padding box外面的包围盒就是内联元素的“包含块”；
      - 如果该内联元素被跨行分割了，那么“包含块”是未定义的，也就是CSS2.1规范并没有明确定义，浏览器自行发挥。否则，“包含块”由该祖先的padding box边界形成。
    * 如果没有符合条件的祖先元素，则“包含块”是“初始包含块”。

## 21.CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？
* 对于一般的元素，它的表现跟visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。
* 例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟display:none一样，也就是说，它们占用的空间也会释放。
* 在不同浏览器下的区别：
  - 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。
  - 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

## 22.width:auto 和 width:100% 的区别
* width:100%会使元素box的宽度等于父元素的content box的宽度。
* width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。

## 23.绝对定位元素与非绝对定位元素的百分比计算的区别
* 绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。
* 非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。

## 24.简单介绍使用图片 base64 编码的优点和缺点。
* base64编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候，可以用该字符串来代替图片的url属性。
* 优点
  - 减少一个图片的HTTP请求
* 缺点
  - （1）根据base64的编码原理，编码后的大小会比原文件大小大1/3，如果把大图片编码到html/css中，不仅会造成文件体
积的增加，影响文件的加载速度，还会增加浏览器对html或css文件解析渲染的时间。
  - （2）使用base64无法直接缓存，要缓存只能缓存包含base64的文件，比如HTML或者CSS，这相比域直接缓存图片的效果要
差很多。
  - （3）兼容性的问题，ie8以前的浏览器不支持。
* 一般一些网站的小图标可以使用base64图片来引入。

## 25.'display'、'position'和'float'的相互关系？
* 有前后依赖关系
  - display非none
	  - 否则：position和float属性的值不影响元素最后的表现
	  - position非absolute 或fixed
		  - 否则：float无效，且display转化为table/block
		  - float为none
			  - 否则：display转化为table/block
			  - 元素不是根元素
				  - 否则：display转化为table/block
				  - display不变

## 26.margin 重叠（折叠）问题的理解。
* 相邻box的margin实际表现为各自margin的最大值
* 具体场景：
  - 相邻兄弟元素margin合并
  - 父级和第一个/最后一个子元素的margin合并
  - 空块级元素的margin合并。

## 27.对 BFC 规范的理解？
* Block Formatting Context, 块级格式化上下文
* 特性
  - 独立的布局环境，与外部元素互不影响
* 创建方式
  - 根元素/包含根元素
  - 浮动元素
	  - `{float: left/right;}`
	  - `inherit`的值不为`none`
  - 绝对定位元素
	  - `{position: absolute;}`
  - `{display: inline-block/flex;}`
  - `{overflow: hidden/auto}`

## 28.IFC 是什么？
* 行级格式化上下文（Inline Formatting Context）
* 特性
  - 水平方向按书写顺序放置
  - 单行放满后自动换行
  - IFC最大高度为其中的所有内联盒子的高度最大值

## 29.请解释一下为什么需要清除浮动？清除浮动的方式
* 必要性
  - 避免样式上的“高度塌陷”
	  - 高度塌陷？？？
* 实现方式
  - 使用clear属性
  - 设置相关元素为BFC

## 30.使用 clear 属性清除浮动的原理？
* 语法
  - {clear: none/left/right/both;}
* 作用
  - 清除相邻的浮动元素对当前元素的影响
* 注意
  - clear只对块元素起作用

## 31.zoom:1 的清除浮动原理?
* zoom是IE独有的属性
* 有一类似的属性是scale
* zoom清除浮动的原理
  - zoom可以缩放元素并重新渲染
  - 具体如何清除浮动？？？

## 32.移动端的布局用过媒体查询吗？
* 媒体查询？？？
* CSS3加入的媒体查询使得无需修改
内容便可以使样式应用于某些特定的设备范围

## 33.使用 CSS 预处理器吗？喜欢哪个？
* SASS？？？
* LESS？？？

## 34.CSS 优化、提高性能的方法有哪些？
* 加载性能
  - 压缩css文件
  - 使用单一精确的样式描述
	  - 如{margin:top 0 bottom 0;}改为
{margin-bottom: bottom;
margin-left: left}
  - 减少使用@import,而建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。
* 选择器性能（查找性能）
  - 在能准确匹配的前提下使用最少的筛选条件（选择器组合），减少匹配的资源消耗
  - 避免使用通配规则，如*{}计算次数惊人！只对需要用到的元素进行选择
  - 尽量少的去对标签进行选择，而是用class。
  - 尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过
三层，更多的使用类来关联每一个标签元素。
  - 对默认继承的属性避免重复指定规则
* 渲染性能
  - 慎重使用高性能属性：浮动、定位。
  - 尽量减少页面重排、重绘。
	  - （重排和重绘的具体区别？？？）
  - 去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积。
	  - 只是减小文件体积的话不该归为“渲染性能“吧？？？
  - 属性值为0时，不加单位。
	  - 减小文档体积？？？
  - 属性值为浮动小数0.**，可以省略小数点之前的0。
	  - 减小文档体积？？？
  - 标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。
  - 不使用@import前缀，它会影响css的加载速度。
  - 正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
  - 不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能。
*  可维护性、健壮性
  - 将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。
  - 样式与内容分离：将css代码定义到外部css中。

## 35.浏览器是怎样解析 CSS 选择器的？
* 样式系统从关键选择器（最右侧的选择器）开始匹配，然后左移查找规则选择器的祖先元素。只要选择器的子树一直在工作，样式系统就会持续左移，直
到和规则匹配，或者是因为不匹配而放弃该规则。

## 36.在网页中应该使用奇数还是偶数的字体？为什么呢？
* 建议使用偶数字体
* 原因
  - 偶数字号相对更容易和web设计的其他部分构成比例关系。比如：当我用了14px的正文字号，我可能会在一些地方用 14×0.5=7px的margin，在另一些地方用14×1.5=21px的标题字号。
  - 低版本的浏览器如ie6会把奇数字体强制转化为偶数，即13px渲染为14px。
  - 系统差别，早期的Windows里，中易宋体点阵只有12和14、15、16px，唯独缺少13px。

## 37.margin 和 padding 分别适合什么场景使用？
* margin
  - 作用
	  - 各离相邻元素
  - 使用场景
	  - 需要在border外侧添加空白时。
	  - 空白处不需要背景（色）时。
	  - 上下相连的两个盒子之间的空白，需要相互抵消时。如15px+20px的margin，将得到20px的空白。
* padding
  - 作用
	  - 隔离单个元素的border和content
  - 使用场景
	  - 需要在border内测添加空白时。
	  - 空白处需要背景（色）时。
	  - 上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。

## 38.抽离样式模块怎么写，说出思路，有无实践经验？
* 抽离样式模块？？？
* 参考
  - 常用的css样式单独做成css文件……通用的和业务相关的分离出来，通用的做成样式模块儿共享，业务相关的，放进业务相关的库里面做成对应功能的模块

## 39.简单说一下 css3 的 all 属性。
* 用于表示全部属性（unicode-bidi和direction）不包括的继承特性

## 40.为什么不建议使用通配符初始化 css 样式。
* 采用*{padding:0;margin:0;}这样的写法好处是写起来很简单，但是是通配符，需要把所有的标签都遍历一遍，当网站较大时，
样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一
套初始化样式。
* 出于性能的考虑，并不是所有标签都会有padding和margin，因此对常见的具有默认padding和margin的元素初始化即
可，并不需使用通配符*来初始化。

## 41.absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？
* （1）内联元素也可以作为“包含块”所在的元素；
* （2）“包含块”所在的元素不是父块级元素，而是最近的position不为static的祖先元素或根元素；
* （3）边界是padding box而不是content box。
* 正常流？？？

## 42.对于 hasLayout 的理解？
* hasLayout是IE特有的一个属性。很多的IE下的css bug都与其息息相关。在IE中，一个元素要么自己对自身的内容进
行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的hasLayout属性值为true时，它负责对自己和可
能的子孙元素进行尺寸计算和定位。虽然这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完
成这些工作。
* 类似于继承？？？
## 43.元素竖向的百分比设定是相对于容器的高度吗？
* 如果是height的话，是相对于包含块的高度。
* 如果是padding或者margin，竖直方向的属性则是相对于包含块的宽度

## 44.全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践）
* 原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，容器及容器内的页面取当前可视区高度，同时容器的父级元素overflow属性值设为hidden，通过更改容器可视区的位置来实现全屏滚动效果。主要是响应鼠标事件，页面通过CSS的动画效果，进行移动。
* 用到的属性
  - overflow：hidden；transition：all 1000 ms ease；

## 45.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解）
* 响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏
幕尺寸做处理。页面头部必须有meta声明的viewport。

## 46.视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）
* 视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。
* 如何实现？？？

## 47.如何修改 chrome 记住密码后自动填充表单的黄色背景？
* chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的in
put表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：
  ```javascript
  {
    background-color:rgb(250,255,189)!important;
    background-image:none!important;
    color:rgb(0,0,0)!important;
  }
  ```
对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是
其他属性可使用。
使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下
```javascript 
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
  -webkit-box-shadow:000px 1000px white inset;
  border:1px solid #CCC !important;
}
```
* 实际使用中并没有黄色背景（？？？）

## 48.怎么让 Chrome 支持小于 12px 的文字？
* (1) 可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size
-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器
已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。
 
* （2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.
75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/
inline-block/...；
 
* （3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。

## 49.让页面里的字体变清晰，变细用 CSS 怎么做？
* webkit内核的私有属性：-webkit-font-smoothing，用于字体抗锯齿，使用后字体看起来会更清晰舒服。  
在MacOS测试环境下面设置-webkit-font-smoothing:antialiased;但是这个属性仅仅是面向MacOS，其他操作系统设
置后无效。

## 50.font-style 属性中 italic 和 oblique 的区别？
* oblique单纯使文字倾斜
* italic使用当前字体的斜体字体（没有的话则使用oblique）

## 51.设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？
* 设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。  
css像素和设备独立像素是等价的，不管在何种分辨率的设备上，css像素的大小应该是一致的，css像素是一个相对单位，它是相
对于设备像素的，一个css像素的大小取决于页面缩放程度和dpr的大小。
* dpr指的是设备像素和设备独立像素的比值，一般的pc屏幕，dpr=1。在iphone4时，苹果推出了retina屏幕，它的dpr
为2。屏幕的缩放会改变dpr的值。
* ppi指的是每英寸的物理像素的密度，ppi越大，屏幕的分辨率越大。

## 52.layoutviewport、visualviewport 和 idealviewport 的区别？
* layout viewport
  - 布局视口，在移动端显示网页时，由于移动端的屏幕尺寸比较小，如果网页使用移动端的屏幕尺寸进行布局的话，那么整
个页面的布局都会显示错乱。所以移动端浏览器提供了一个layout viewport布局视口的概念，使用这个视口来对页面进行布局展
示，一般layout viewport的大小为980px，因此页面布局不会有太大的变化，我们可以通过拖动和缩放来查看到这个页面。
	  - 解释得一塌糊涂（？？？）
	  - 可能需要上下滚动条和左右滚动条
* visual viewport
  - 视觉视口，visual viewport指的是移动设备上我们可见的区域的视口大小，一般为屏幕的分辨率的大小。
	  - 不需要滚动条
* ideal viewport
  - ideal viewport其实就是通过修改layout viewport的大小，让它等于设备的宽度，
	  - 可能需要上下滚动条？？？