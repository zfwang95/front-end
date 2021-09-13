# 入门
## 一、CSS基本介绍
### 1.CSS版本及特性
#### ——CSS3 有哪些新特性？
* 新增各种CSS选择器 （如：`:not(.input)`，表示所有class不是“input”的节点）
* 圆角  （`border-radius:8px`）
* 多列布局 （`multi-column` `layout`）
* 阴影和反射 （`Shadow\Reflect`）
* 文字特效  （`text-shadow`）
* 文字渲染  （`Text-decoration`）
* 线性渐变  （`gradient`）
* 旋转   （`transform`）
* 缩放，定位，倾斜，动画，多背景
### 2.文件引用
#### ——style 标签写在 body 后与 body 前有什么区别？
* 页面加载自上而下，建议把style写在body前。写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）。
#### ——抽离样式模块怎么写，说出思路，有无实践经验？
* 抽离样式模块？？？
* 参考
  - 常用的css样式单独做成css文件……通用的和业务相关的分离出来，通用的做成样式模块儿共享，业务相关的，放进业务相关的库里面做成对应功能的模块
### 3.CSS预处理器
#### ——什么是 CSS 预处理器/后处理器？
* CSS预处理器定义了一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，即用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件。预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less csssprite，增强了css代码的复用性，还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。
* CSS后处理器是对CSS进行处理，并最终生成CSS的预处理器，它属于广义上的CSS预处理器。我们很久以前就在用CSS后处理器了，最典型的例子是CSS压缩工具（如clean-css）。后处理器例如：PostCSS，通常用于在完成的样式表中根据CSS规范处理CSS，目前最常做的是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。<font color="red">(具体作用？)</font>

#### ——使用 CSS 预处理器吗？喜欢哪个？
* SASS？？？
* LESS？？？
## 二、基本概念
### 1.盒子模型
#### ——margin:auto 的填充规则？<font color="red">(需补充)</font>
* margin的'auto'可不是摆设，是具有强烈的计算意味的关键字，用来计算元素对应方向应该获得的剩余间距大小。但是触发margin:auto计算有一个前提条件，就是width或height为auto时，元素是具有对应方向的自动填充特性的。
（1）如果一侧定值，一侧auto，则auto为剩余空间大小。
（2）如果两侧均是auto，则平分剩余空间。
#### ——margin 无效的情形<font color="red">(需补充)</font>
* （1）display计算值inline的非替换元素的垂直margin是无效的。对于内联替换元素，垂直margin有效，并且没有margin合并的问题。
* （2）表格中的<tr>和<td>元素或者设置display计算值是table-cell或table-row的元素的margin都是无效的。
* （3）绝对定位元素非定位方位的margin值“无效”。
* （4）定高容器的子元素的margin-bottom或者宽度定死的子元素的margin-right的定位“失效”。
#### ——border 的特殊性？<font color="red">(需补充)</font>
* （1）border-width却不支持百分比。
* （2）border-style的默认值是none，有一部分人可能会误以为是solid。这也是单纯设置border-width或border-col
or没有边框显示的原因。
* （3）border-style:double的表现规则：双线宽度永远相等，中间间隔±1。
* （4）border-color默认颜色就是color色值。
* （5）默认background背景图片是相对于padding box定位的
#### ——什么是幽灵空白节点？<font color="red">(需补充)</font>
* “幽灵空白节点”是内联盒模型中非常重要的一个概念，具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同
每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵
一样，但又确确实实地存在（怎么存在？？？）
，表现如同文本节点一样，因此，称其为“幽灵空白节点”。
#### ——内联盒模型基本概念<font color="red">(需补充)</font>
* 内容区域（content area）。内容区域指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个字符盒子（character box）；但是有些元素，如图片这样的替换元素，其内容显然不是文字，不存在字符盒子之类的，因此，对于这些元素，内容区域可以看成元素自身。
* 内联盒子（inline box）。“内联盒子”不会让内容成块显示，而是排成一行，这里的“内联盒子”实际指的就是元素的“外在盒子”，用来决定元素是内联还是块级。该盒子又可以细分为“内联盒子”和“匿名内联盒子”两类。
* 行框盒子（line box），每一行就是一个“行框盒子”（实线框标注），每个“行框盒子”又是由一个一个“内联盒子”组成的。
* 包含块（containing box），由一行一行的“行框盒子”组成。
#### ——如何去除 inline-block 元素间间距？<font color="red">(需补充)</font>
* 移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing
#### ——margin 和 padding 分别适合什么场景使用？
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
#### ——margin 重叠（折叠）问题的理解。
* 相邻box的margin实际表现为各自margin的最大值
* 具体场景：
  - 相邻兄弟元素margin合并
  - 父级和第一个/最后一个子元素的margin合并
  - 空块级元素的margin合并。
#### ——width:auto 和 width:100% 的区别
* width:100%会使元素box的宽度等于父元素的content box的宽度。
* width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。
#### ——介绍标准CSS盒子模型
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
### 2.定位和布局
#### ——css 两栏布局的实现？<font color="red">(需补充)</font>
#### ——css 三栏布局的实现？<font color="red">(需补充)</font>
#### ——css 实现上下固定中间自适应布局？
* 利用绝对定位实现
```css
body {
  padding: 0;
  margin: 0;
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
  background: red;
}
.container {
  position: absolute;
  top: 100px;
  bottom: 100px;
  width: 100%;
  background: green;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: red;
}
```
利用flex布局实现
```css
html,
body {
  height: 100%;
}
body {
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
}
.header {
  height: 100px;
  background: red;
}
.container {
  flex-grow: 1;
  background: green;
}
.footer {
  height: 100px;
  background: red;
}
```
#### ——relative 的特性？<font color="red">(需补充)</font>
* （1）相对定位元素的left/top/right/bottom的百分比值是相对于包含块计算的，而不是自身。注意，虽然定位位移是相对自身，但是百分比值的计算值不是。
（2）top和bottom这两个垂直方向的百分比值计算跟height的百分比值是一样的，都是相对高度计算的。同时，如果包含块的高度是auto，那么计算值是0，偏移无效，也就是说，如果父元素没有设定高度或者不是“格式化高度”，那么relative类似top:20%的代码等同于top:0。
（3）当相对定位元素同时应用对立方向定位值的时候，也就是top/bottom和left/right同时使用的时候，只有一个方向的定位属性会起作用。而谁起作用则是与文档流的顺序有关的，默认的文档流是自上而下、从左往右，因此top/bottom同时使用的时候，bottom失效；left/right同时使用的时候，right失效。
#### ——无依赖绝对定位是什么？<font color="red">(需补充)</font>
* 没有设置left/top/right/bottom属性值的绝对定位称为“无依赖绝对定位”。
无依赖绝对定位其定位的位置和没有设置position:absolute时候的位置相关。
#### ——几种常见的 CSS 布局
* <font color="red">(需补充)</font>
#### ——使用 rem 布局的优缺点？
* rem布局：使用rem作为尺寸单位，rem单位的意思是“根元素的字体大小”。
* 优点
  - 在屏幕分辨率千差万别的时代，只要将rem与屏幕分辨率关联起来就可以实现页面的整体缩放，使得在设备上的展现都统一起来了。
而且现在浏览器基本都已经支持rem了，兼容性也非常的好。
* 缺点
  - （1）在奇葩的dpr设备上表现效果不太好，比如一些华为的高端机型用rem布局会出现错乱。
  - （2）使用iframe引用也会出现问题。
  - （3）rem在多屏幕尺寸适配上与当前两大平台的设计哲学不一致。即大屏的出现到底是为了看得又大又清楚，还是为了看的更多的问
题。
#### ——元素竖向的百分比设定是相对于容器的高度吗？
* 如果是height的话，是相对于包含块的高度。
* 如果是padding或者margin，竖直方向的属性则是相对于包含块的宽度
#### ——absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？
* （1）内联元素也可以作为“包含块”所在的元素；
* （2）“包含块”所在的元素不是父块级元素，而是最近的position不为static的祖先元素或根元素；
* （3）边界是padding box而不是content box。
* 正常流？？？
#### ——IFC 是什么？
* 行级格式化上下文（Inline Formatting Context）
* 特性
  - 水平方向按书写顺序放置
  - 单行放满后自动换行
  - IFC最大高度为其中的所有内联盒子的高度最大值
#### ——对 BFC 规范的理解？
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
#### ——'display'、'position'和'float'的相互关系？
* 有前后依赖关系，实际布局根据各个属性综合而确定，流程如下：
  - display非none
	  - 否则：position和float属性的值不影响元素最后的表现
	  - position非absolute 或fixed
		  - 否则：float无效，且display转化为table/block
		  - float为none
			  - 否则：display转化为table/block
			  - 元素不是根元素
				  - 否则：display转化为table/block
				  - display不变
#### ——绝对定位元素与非绝对定位元素的百分比计算的区别
* 绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。
* 非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。
#### ——什么是包含块，对于包含块的理解?
* 包含块（containing block）:作为位置参考的父级元素的内容区域，position的值不同时（不同定位方式）对应的包含块不同
* 具体分类
  - （1）根元素（很多场景下可以看成是<html>）被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。
  - （2）对于其他元素，如果该元素的position是relative或者static，则“包含块”由其最近的块容器祖先盒的content box边界形成。
  - （3）如果元素position:fixed，则“包含块”是“初始包含块”。
  - （4）如果元素position:absolute，则“包含块”由最近的position不为static的祖先元素建立，具体方式如下：
    * 如果该祖先元素是纯inline元素，则规则略复杂：
      - 假设给内联元素的前后各生成一个宽度为0的内联盒子（inline box），则这两个内联盒子的padding box外面的包围盒就是内联元素的“包含块”；
      - 如果该内联元素被跨行分割了，那么“包含块”是未定义的，也就是CSS2.1规范并没有明确定义，浏览器自行发挥。否则，“包含块”由该祖先的padding box边界形成。
    * 如果没有符合条件的祖先元素，则“包含块”是“初始包含块”。
#### ——请解释一下 CSS3 的 Flexbox（弹性盒布局模型），以及适用场景？
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
#### ——如何（在父元素中）居中 div
* 方案一：给div设定宽度并利用margin的auto（效果：水平居中）
```css
  div {
    width: 200px;
    margin: 0 auto;
  } //水平居中
```
* 方案二：为父元素指定文本居中（效果：水平居中）
```css
  .container {
    text-align: center;
  } //水平居中
```
* 方案三: IE盒子模型对应部分在当前元素内居中，当前元素(margin外边界)占满（非static的）祖先元素（效果:水平、上下居中）
```css
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
  ```css
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
  ```css
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
```css
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
#### ——flex布局的好处
#### ——position有哪些值，作用是什么？？？
- flexy
- fixed
- static
- absolute
- relative
#### ——position的原点
* relative
  - 相对于自己本身在正常文档流中的位置进行定位
* absolute
  - 相对于最近一级定位不为static的父元素进行定位
* fixed
  - （老版本IE不支持）生成绝对定位，相对于浏览器窗口或者frame进行定位。
* static
  - 默认值，没有定位，元素出现在正常的文档流中。
* sticky
  - 生成粘性定位的元素，容器的位置根据正常文档流计算得出。
#### ——display： none 和visibility： hidden的区别
* display： none
  - 效果同去掉该元素
* visibility： hidden
  - 效果为该元素不可见
  - 相当于一个同样大小的空白元素
#### ——display 有哪些值？说明他们的作用
* `block` 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
* `none` 元素不显示，并从文档流中移除。
* `inline` 行内元素类型（内联盒子）。默认宽度为内容宽度，不可设置宽高，同行显示。
* `inline-block` 默认宽度为内容宽度，可以设置宽高，同行显示。
* `list-item` 像块类型元素一样显示，并添加样式列表标记。
* `table` 此元素会作为块级表格来显示。
* `inherit` 规定应该从父元素继承display属性的值。
#### ——position 的值为 relative 和 absolute时各自的定位原点是？
* `relative`：生成相对定位的元素，相对于其元素本身所在正常位置进行定位。
* `absolute`：生成绝对定位的元素，相对于值不为static的第一个父元素的padding box进行定位，也可以理解为离自己这一级元素最近的一级position设置为absolute或者relative的父元素的padding box的左上角为原点的。
<font color="#a6a6a6">补充其他值的说明：</font>
* `fixed`（老IE不支持）：生成绝对定位的元素，相对于浏览器窗口进行定位。
* `static`：默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。
* `inherit`：规定从父元素继承position属性的值。
#### ——垂直居中的实现方式
* 单行文本: 
  - line-height = height
* 图片:
  -  vertical-align: middle;
* flex:
  -  display:flex;
  - margin:auto
* absolute 定位: 
  - top: 50%;left: 50%;
  - transform: translate(-50%, -50%);
### 3.简写属性
### 4.层叠与继承
#### ——什么是层叠上下文？<font color="red">(需补充)</font>
#### ——什么是层叠水平？<font color="red">(需补充)</font>
#### ——元素的层叠顺序？<font color="red">(需补充)</font>
#### ——层叠准则？
* （1）数值大的优先：当具有明显的层叠水平标识的时候，如生效的z-index属性值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。
（2）后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。
#### ——为什么 height:100% 会无效？<font color="red">(需补充,无效的具体表现？和为设定height时一样？)</font>
* 对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。
原因是如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto，而由于解释成了auto，所以无法参与计算。使用绝对定位的元素会有计算值，即使祖先元素的height计算为auto也是如此。
#### ——对于 hasLayout 的理解？
* hasLayout是IE特有的一个属性。很多的IE下的css bug都与其息息相关。在IE中，一个元素要么自己对自身的内容进
行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的hasLayout属性值为true时，它负责对自己和可
能的子孙元素进行尺寸计算和定位。虽然这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完
成这些工作。
* 类似于继承？？？
#### ——为什么不建议使用通配符初始化 css 样式。
* 采用*{padding:0;margin:0;}这样的写法好处是写起来很简单，但是是通配符，需要把所有的标签都遍历一遍，当网站较大时，
样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一
套初始化样式。
* 出于性能的考虑，并不是所有标签都会有padding和margin，因此对常见的具有默认padding和margin的元素初始化即
可，并不需使用通配符*来初始化。
#### ——简单说一下 css3 的 all 属性。
* 用于表示全部属性（unicode-bidi和direction）不包括的继承特性
#### ——CSS 中哪些属性可以（默认）继承
* 字体相关的属性，如`font-size`、`font-weight`。
* 文本相关的属性，如`color`、`text-align`。
* 表格的一些布局属性、列表属性,如`list-style`。
* 光标属性`cursor`、元素可见性`visibility`。
* 补充： inherit可以使属性强制使用父元素的相同值
#### ——CSS 优先级算法如何计算
* css规则的优先级计算方式：四个等级，从高到低依次对应：内嵌样式、id选择器、类/伪类/属性选择器、元素/伪元素选择器，每个等级独立计数，比较优先级时从高等级开始，数值大的等级高。
* !important可以覆盖优先级

****
### 5.选择器
#### ——CSS3 新增伪类有哪些
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
#### ——关于伪类的LVHA概念的解释
* 即`<a>`的四种状态
  - `:link`       - 未访问
  - `:visited`	  - 已访问
  - `:hover`  	  - 鼠标悬停
  - `:active` 	  - 鼠标点击(按住)
* 补充： l、v、h、a的顺序符合实际使用中的状态顺序
#### ——简介CSS选择器
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
#### ——::before 和:after 中双冒号和单冒号有什么区别？解释一下这两个伪元素的作用
* `:`用于伪类，`::`用于伪元素
* `:after`是CSS3之前的写法，和CSS3中的`::after`相同
* `::before`用于在当前元素前插入内容，`::after`用于在当前元素后插入内容
#### ——伪类与伪元素的区别
* 伪类
  - 选择已有元素的某种状态
  - 如：`:hover`
* 伪元素
  - 选择已有元素的一部分/创建不在文档树中的元素
  - 如：`::first-line`
  - 如：`::before`
****
### 6.值和单位
### 7.内容/整体样式（文字、图片、整个元素......）
#### ——常见的元素隐藏方式？
* 1）使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
* （2）使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。
* （3）使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
* （4）通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
* （5）通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。
* （6）通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
* （7）通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
#### ——font-weight 的特殊性？<font color="red">(需补充)</font>
#### ——text-indent 的特殊性？<font color="red">(需补充)</font>
#### ——letter-spacing 与字符间距？<font color="red">(需补充)</font>
#### ——word-spacing 与单词间距？
* letter-spacing作用于所有字符，但word-spacing仅作用于空格字符。换句话说，word-spacing的作用就是增加空格的间隙宽度。
#### ——white-space 对换行和空格的控制？<font color="red">(需补充)</font>
* white-space属性声明了如何处理元素内的空白字符，这类空白字符包括Space（空格）键、Enter（回车）键、Tab（制表符）键产生的空白。因此，white-space可以决定图文内容是否在一行显示（回车空格是否生效），是否显示大段连续空白（空格是否生效）等。其属性值包括下面这些：
  - normal：合并空白字符和换行符。
  - pre：空白字符不合并，并且内容只在有换行符的地方换行。
  - nowrap：该值和normal一样会合并空白字符，但不允许文本环绕。
  - pre-wrap：空白字符不合并，并且内容只在有换行符的地方换行，同时允许文本环绕。
  - pre-line：合并空白字符，但只在有换行符的地方换行，允许文本环绕。
#### ——隐藏元素的 background-image 到底加不加载？<font color="red">(需补充)</font>
* 1）元素的背景图片
  - 元素本身设置 display:none，会请求图片 -父级元素设置 display:none，不会请求图片 -样式没有元素使用，不会请求 -:hover 样式下，触发时请求。
* （2）img 标签图片任何情况下都会请求图片
#### ——clip 裁剪是什么？<font color="red">(需补充)</font>
* 实现“可访问性隐藏”的一种方式，使得内容肉眼看不见，但是其他辅助设备却能够进行识别和访问
#### ——min-width/max-width 和 min-height/max-height 属性间发生冲突时的覆盖规则？
* max-width会覆盖width，即使width是行类样式或者设置了!important。
* min-width会覆盖max-width，此规则发生在min-width和max-width冲突的时候
* 总结：min-width > max-width > width
#### ——什么是首选最小宽度？<font color="red">(需补充)</font>
* “首选最小宽度”，指的是元素最适合的最小宽度。
- 例：汉字中的单字
- 例：英文中的单词
	- 宽度不固定，但可以通过word-break:break-all来实现。
#### ——设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？
* 设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。  
css像素和设备独立像素是等价的，不管在何种分辨率的设备上，css像素的大小应该是一致的，css像素是一个相对单位，它是相
对于设备像素的，一个css像素的大小取决于页面缩放程度和dpr的大小。
* dpr指的是设备像素和设备独立像素的比值，一般的pc屏幕，dpr=1。在iphone4时，苹果推出了retina屏幕，它的dpr
为2。屏幕的缩放会改变dpr的值。
* ppi指的是每英寸的物理像素的密度，ppi越大，屏幕的分辨率越大。
#### ——怎么让 Chrome 支持小于 12px 的文字？
* (1) 可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size
-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器
已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。
* （2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.
75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/
inline-block/...；
* （3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
#### ——让页面里的字体变清晰，变细用 CSS 怎么做？
* webkit内核的私有属性：-webkit-font-smoothing，用于字体抗锯齿，使用后字体看起来会更清晰舒服。  
在MacOS测试环境下面设置-webkit-font-smoothing:antialiased;但是这个属性仅仅是面向MacOS，其他操作系统设
置后无效。
#### ——font-style 属性中 italic 和 oblique 的区别？
* oblique单纯使文字倾斜
* italic使用当前字体的斜体字体（没有的话则使用oblique）
#### ——在网页中应该使用奇数还是偶数的字体？为什么呢？
* 建议使用偶数字体
* 原因
  - 偶数字号相对更容易和web设计的其他部分构成比例关系。比如：当我用了14px的正文字号，我可能会在一些地方用 14×0.5=7px的margin，在另一些地方用14×1.5=21px的标题字号。
  - 低版本的浏览器如ie6会把奇数字体强制转化为偶数，即13px渲染为14px。
  - 系统差别，早期的Windows里，中易宋体点阵只有12和14、15、16px，唯独缺少13px。
#### ——rgba和opacity的异同
* 同
- 为元素附加透明效果
* 异
- opacity属性会传递到后代元素
- rgba属性仅作用于当前元素
#### ——CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？
* 对于一般的元素，它的表现跟visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。
* 例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟display:none一样，也就是说，它们占用的空间也会释放。
* 在不同浏览器下的区别：
  - 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。
  - 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。
#### ——什么是基线和 x-height？<font color="red">(需补充)</font>
* 字母x的下边缘（线）就是我们的基线。
* x-height指的就是小写字母x的高度，术语描述就是基线和等分线（meanline）（也称作中线，midline）之间的距离。在CSS世界中，middle指的是基线往上1/2x-height高度。我们可以近似理解为字母x交叉点那个位置。
* ex是CSS中的一个相对单位，指的是小写字母x的高度，没错，就是指x-height。ex的价值就在其副业上不受字体和字号影响的内联元素的垂直居中对齐效果。内联元素默认是基线对齐的，而基线就是x的底部，而1ex就是一个x的高度。
#### ——line-height 的特性？<font color="red">(需补充)</font>
* 什么是line-height
- 对于非替换元素的纯内联元素，其可视高度完全由line-height决定。对于文本这样的纯内联元素，line-height就是高度计算的基石，用专业说法就是指定了用来计算行框盒子高度的基础高度。
* 和什么相比较
* 特殊之处
#### ——vertical-align 的特性？<font color="red">(需补充)</font>
****
### 8.图片格式、编码
#### ——阐述一下 CSS Sprites
* 将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的background-image，background-repeat，background-position的组合进行背景定位。利用CSS Sprites能很好地减少网页的http请求，从而很好的提高页面的性能；CSS Sprites能减少图片的字节。
* 优点
  - 减少HTTP请求数，极大地提高页面加载速度
  - 提高图片信息复用率，提高压缩比，减少图片大小
  - 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现
* 缺点
  - 图片合并麻烦
  - 维护麻烦，修改一个图片可能需要重新布局整个图片，样式
#### ——浏览器如何判断是否支持 webp 格式图片
* 方法一：宽高判断法，测试浏览器能否获取webp格式图片的宽高。通过创建image对象，将其src属性设置为webp格式的图片，然后在onload事件中获取图片的宽高，如果能够获取，则说明浏览器支持webp格式图片。如果不能获取或者触发了onerror函数，那么就说明浏览器不支持webp格式的图片。
* 方法二：canvas判断方法<font color="red">(具体操作描述不清？)</font>。我们可以动态的创建一个canvas对象，通过canvas的toDataURL将设置为webp格式，然后判断返回值中是否含有image/webp字段，如果包含则说明支持WebP，反之则不支持。
#### ——png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？
* （1）BMP，是无损的、既支持索引色也支持直接色的、点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常具有较大的文件大小。
* （2）GIF是无损的、采用索引色的、点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但，GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。
* （3）JPEG是有损的、采用直接色的、点阵图。JPEG的图片的优点，是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。
* （4）PNG-8是无损的、使用索引色的、点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。现在，除非需要动画的支持，否则我们没有理由使用GIF而不是PNG-8。
* （5）PNG-24是无损的、使用直接色的、点阵图。PNG-24的优点在于，它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。
* （6）SVG是无损的、矢量图。SVG是矢量图。这意味着SVG图片由直线和曲线以及绘制它们的方法组成。当你放大一个SVG图片的时候，你看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制企业Logo、Icon等。
* （7）WebP是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的、点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。
  - webp的大小优势：
    - 在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；
    - 在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；
    - WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。
  - webp的缺点：
但是目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好
#### ——简单介绍使用图片 base64 编码的优点和缺点。
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
### 9.媒体查询
#### ——移动端的布局用过媒体查询吗？
* 媒体查询？？？
* CSS3加入的媒体查询使得无需修改
内容便可以使样式应用于某些特定的设备范围
****
### 10.内容溢出的处理/滚动
#### ——如何实现单行／多行文本溢出的省略（...）？<font color="red">(需补充)</font>
```css
* /*单行文本溢出*/
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 
/*多行文本溢出*/
p {
  position: relative;
  line-height: 1.5em;
  /*高度为需要显示的行数*行高，比如这里我们显示两行，则为3*/
  height: 3em;
  overflow: hidden;
}
 
p:after {
  content: '...';
  position: absolute;
  bottom: 0;
  right: 0;
}
```
#### ——absolute 与 overflow 的关系？<font color="red">(需补充)</font>
* 如果overflow不是定位元素，同时绝对定位元素和overflow容器之间也没有定位元素，则overflow无法对absolute元素进行剪裁。
#### ——overflow 的特性？
* 1）一个设置了overflow:hidden声明的元素，假设同时存在border属性和padding属性，则当子元素内容超出容器宽度高度限制的时候，剪裁的边界是border box的内边缘，而非padding box的内边缘。
（2）HTML中有两个标签是默认可以产生滚动条的，一个是根元素`<html>`，另一个是文本域`<textarea>`。
（3）滚动条会占用容器的可用宽度或高度。
（4）元素设置了overflow:hidden声明，里面内容高度溢出的时候，滚动依然存在，仅仅滚动条不存在
#### ——overflow:scroll 时不能平滑滚动的问题怎么处理？<font color="red">(需补充)</font>
* `{-webkit-overflow-scrolling:touch;}`,这行代码启用了硬件加速特性
<font color="red">(具体加在哪里？)</font>
#### ——全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践）
* 原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，容器及容器内的页面取当前可视区高度，同时容器的父级元素overflow属性值设为hidden，通过更改容器可视区的位置来实现全屏滚动效果。主要是响应鼠标事件，页面通过CSS的动画效果，进行移动。
* 用到的属性
  - overflow：hidden；transition：all 1000 ms ease；
#### ——layoutviewport、visualviewport 和 idealviewport 的区别？
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
****
### 11.替换元素
#### ——什么是替换元素？<font color="red">(需补充)</font>
* 通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。因此，`<img>`、`<object>`、`<video>`、`<iframe>`或者表单元素`<textarea>`和`<input>`和`<select>`都是典型的替换元素
* 特性
  - 内容可替换
  - 外观不受页面上的CSS的影响
  - 有自己的尺寸
  - CSS属性上有自己的一套表现规则
  - 比较具有代表性的就是vertical-align属性，对于替换元素和非替换元素，vertical-align属性值的解释是不一样的。比方说vertical-align的默认值的baseline，很简单的属性值，基线之意，被定义为字符x的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘
  - 所有的替换元素都是内联水平元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认的display值却是不一样的，有的是inline，有的是inline-block。
#### ——替换元素的计算规则？<font color="red">(需补充)</font>
* 替换元素的尺寸从内而外分为3类：固有尺寸、HTML尺寸和CSS尺寸
  - （1）如果没有CSS尺寸和HTML尺寸，则使用固有尺寸作为最终的宽高。
  - （2）如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。
  - （3）如果有CSS尺寸，则最终尺寸由CSS属性决定。
  - （4）如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。
  - （5）如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素。
  - （6）内联替换元素和块级替换元素使用上面同一套尺寸计算规则。
#### ——content 与替换元素的关系？<font color="red">(需补充)</font>
* content属性生成的对象称为“匿名替换元素”（和替换元素的具体关系？？？）
* content生成的内容的特性
  - 我们使用content生成的文本是无法选中、无法复制的，好像设置了user select:none声明一般，但是普通元素的文本却可以被轻松选中。同时，content生成的文本无法被屏幕阅读设备读取，也无法被搜索引擎抓取，因此，千万不要自以为是地把重要的文本信息使用content属性生成，因为这对可访问性和SEO都很不友好。
  - content生成的内容不能左右:empty伪类
  - content动态生成值无法获取。

## 三、经典案例、具体问题
#### ——一个自适应矩形，水平垂直居中，且宽高比为 2:1
```css
  /*实现原理参考自适应正方形和水平居中方式*/
  .box {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  
    width: 10%;
    height: 0;
    padding-top: 20%;
    background: tomato;
  }
```
#### ——实现一个宽高自适应的正方形
```css
/*1.第一种方式是利用vw来实现*/
.square {
  width: 10%;
  height: 10vw;
  background: tomato;
}
/*2.第二种方式是利用元素的margin/padding百分比是相对父元素width的性质来实现*/
.square {
  width: 20%;
  height: 0;
  padding-top: 20%;
  background: orange;
}
/*3.第三种方式是利用子元素的margin-top的值来实现的*/
.square {
  width: 30%;
  overflow: hidden;
  background: yellow;
}
.square::after {
  content: '';
  display: block;
  margin-top: 100%;
}
```
#### ——画一条 0.5px 的线<font color="red">(需补充)</font>
* 采用meta viewport的方式
采用border-image的方式
采用transform:scale()的方式
#### ——实现：有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。
* 方案一：外层div使用`position：relative`；高度要求自适应的div使用`position:absolute; top:100px; bottom:0; left:0; right:0;`
* 方案二：使用flex布局，设置主轴为竖轴，第二个div的flex-grow为1。
#### ——如果需要手动实现动画，你认为最小时间间隔是多久，为什么？
* 1/60 s，多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为`1s / 60 * 1000 ms/s＝16.7ms`
#### ——position:fixed;在 android 下无效怎么处理？
* 原因在于此时fixed相对的并不是移动端屏幕窗口。移动端浏览器默认的viewport叫做"layout viewport"。在移动端显示时，因为layout viewport的宽度大于移动端屏幕的宽度，（所以页面会出现滚动条左右移动），而fixed的元素是相对layout viewport来固定位置的，所以会出现感觉fixed无效的情况。如果想实现fixed相对于屏幕的固定效果，我们需要改变的是viewport的大小为ideal viewport，可以如下设置：
```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
```
#### ——如何修改 chrome 记住密码后自动填充表单的黄色背景？
* chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的in
put表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：
```css
   {
    background-color:rgb(250,255,189)!important;
    background-image:none!important;
    color:rgb(0,0,0)!important;
  }
```
对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是
其他属性可使用。
使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下
```css 
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-box-shadow:000px 1000px white inset;
    border:1px solid #CCC !important;
  }
```
* 实际使用中并没有黄色背景（？？？）
#### ——视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）
* 视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。
* 如何实现？？？
#### ——什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解）
* 响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏
幕尺寸做处理。页面头部必须有meta声明的viewport。
#### ——实现一个三角形
```css
* /*三角形的实现原理是利用了元素边框连接处的等分原理。*/
.triangle {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: tomatotransparenttransparenttransparent;
}
```
#### ——用纯 CSS 创建一个三角形的原理是什么？
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
#### ——一个满屏品字布局如何设计?
* 分两行，第一行为一个box居中并设定宽度为x，第二行为两个box，宽度设定为x/2，利用`{display: inline-flex}`使其不换行（如用inline需注意此时不可设定width）。
#### ——CSS 多列等高如何实现？
<font color='#ff0000'>（解释不清，差评 (〃＞目＜) ）</font>
* 方案1）利用padding-bottom|margin-bottom正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐藏（overflow:hidden），这样父容器的高度就还是它里面的列没有设定padding-bottom时的高度，当它里面的任一列高度增加了，则父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的padding-bottom补偿这部分高度差。
* 方案2）利用table-cell所有单元格高度都相等的特性，来实现多列等高。
* 方案3）利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度的特性，来实现多列等高。
#### ——经常遇到的浏览器的兼容性问题有哪些？其原因，解决方法是什么？
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
#### ——`<li>` 与 `<li>` 之间有额外的空白间隔是什么原因引起的？有什么解决办法？
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
****

# 进阶
### 1.样式初始化
#### ——为什么要初始化 CSS 样式？
* 原因：属于浏览器的兼容问题，不同浏览器中有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
* 补充说明：当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，只能力求影响最小的情况下初始化。

* 最简单的初始化方法：`*{padding: 0; margin: 0;}`（强烈不建议）

* 淘宝的样式初始化代码：
```css
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
### 2.清除浮动
#### ——请解释一下为什么需要清除浮动？清除浮动的方式
* 必要性
  - 避免样式上的“高度塌陷”
	  - 高度塌陷？？？
* 实现方式
  - 使用clear属性
  - 设置相关元素为BFC
#### ——使用 clear 属性清除浮动的原理？
* 语法
  - {clear: none/left/right/both;}
* 作用
  - 清除相邻的浮动元素对当前元素的影响
* 注意
  - clear只对块元素起作用

#### ——zoom:1 的清除浮动原理?
* zoom是IE独有的属性
* 有一类似的属性是scale
* zoom清除浮动的原理
  - zoom可以缩放元素并重新渲染
  - 具体如何清除浮动？？？
### 3.CSS性能优化
#### ——CSS 优化、提高性能的方法有哪些？
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
### 4.浏览器解析过程、兼容问题
#### ——浏览器是怎样解析 CSS 选择器的？
* 样式系统从关键选择器（最右侧的选择器）开始匹配，然后左移查找规则选择器的祖先元素。只要选择器的子树一直在工作，样式系统就会持续左移，直
到和规则匹配，或者是因为不匹配而放弃该规则。
****
### 5.动态页面
#### ——transition 和 animation 的区别<font color="red">(需补充)</font>
* transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线。
* animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。
****

# 综合