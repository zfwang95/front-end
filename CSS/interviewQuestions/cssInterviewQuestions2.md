# css面试题-2

## 53.position:fixed;在 android 下无效怎么处理？

* 原因在于此时fixed相对的并不是移动端屏幕窗口。移动端浏览器默认的viewport叫做"layout viewport"。在移动端显示时，因为layout viewport的宽度大于移动端屏幕的宽度，（所以页面会出现滚动条左右移动），而fixed的元素是相对layout viewport来固定位置的，所以会出现感觉fixed无效的情况。如果想实现fixed相对于屏幕的固定效果，我们需要改变的是viewport的大小为ideal viewport，可以如下设置：
  ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  ```
## 54.如果需要手动实现动画，你认为最小时间间隔是多久，为什么？
* 1/60 s，多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为`1s / 60 * 1000 ms/s＝16.7ms`

## 55.如何去除 inline-block 元素间间距？<font color="red">(需补充)</font>
* 移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

## 56.overflow:scroll 时不能平滑滚动的问题怎么处理？<font color="red">(需补充)</font>
* `{-webkit-overflow-scrolling:touch;}`,这行代码启用了硬件加速特性
<font color="red">(具体加在哪里？)</font>

## 57.实现：有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。
* 方案一：外层div使用`position：relative`；高度要求自适应的div使用`position:absolute; top:100px; bottom:0; left:0; right:0;`
* 方案二：使用flex布局，设置主轴为竖轴，第二个div的flex-grow为1。

## 58.png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？
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

## 59.浏览器如何判断是否支持 webp 格式图片
* 方法一：宽高判断法，测试浏览器能否获取webp格式图片的宽高。通过创建image对象，将其src属性设置为webp格式的图片，然后在onload事件中获取图片的宽高，如果能够获取，则说明浏览器支持webp格式图片。如果不能获取或者触发了onerror函数，那么就说明浏览器不支持webp格式的图片。
* 方法二：canvas判断方法<font color="red">(具体操作描述不清？)</font>。我们可以动态的创建一个canvas对象，通过canvas的toDataURL将设置为webp格式，然后判断返回值中是否含有image/webp字段，如果包含则说明支持WebP，反之则不支持。

## 60.什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）
* 需求来源：网站向服务器请求的时候，会自动带上cookie这样增加表头信息量，使请求变慢。如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server，非常浪费带宽，所以不如隔离开，静态资源放CDN<font color="red">(CDN？)</font>。因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。同时这种方式不会将cookie传入WebServer，也减少了WebServer对cookie的处理分析环节，提高了webserver的http请求的解析速度。
* 总之就是通过CDN获取资源，具体的没查到。

## 61.style 标签写在 body 后与 body 前有什么区别？
* 页面加载自上而下，建议把style写在body前。写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）。

## 62.什么是 CSS 预处理器/后处理器？
* CSS预处理器定义了一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，即用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件。预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less csssprite，增强了css代码的复用性，还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。
* CSS后处理器是对CSS进行处理，并最终生成CSS的预处理器，它属于广义上的CSS预处理器。我们很久以前就在用CSS后处理器了，最典型的例子是CSS压缩工具（如clean-css）。后处理器例如：PostCSS，通常用于在完成的样式表中根据CSS规范处理CSS，目前最常做的是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。<font color="red">(具体作用？)</font>

## 63.阐述一下 CSS Sprites
* 将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的background-image，background-repeat，background-position的组合进行背景定位。利用CSS Sprites能很好地减少网页的http请求，从而很好的提高页面的性能；CSS Sprites能减少图片的字节。
* 优点
  - 减少HTTP请求数，极大地提高页面加载速度
  - 提高图片信息复用率，提高压缩比，减少图片大小
  - 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现
* 缺点
  - 图片合并麻烦
  - 维护麻烦，修改一个图片可能需要重新布局整个图片，样式

## 64.使用 rem 布局的优缺点？
* rem布局：使用rem作为尺寸单位，rem单位的意思是“根元素的字体大小”。
* 优点
  - 在屏幕分辨率千差万别的时代，只要将rem与屏幕分辨率关联起来就可以实现页面的整体缩放，使得在设备上的展现都统一起来了。
而且现在浏览器基本都已经支持rem了，兼容性也非常的好。
* 缺点
  - （1）在奇葩的dpr设备上表现效果不太好，比如一些华为的高端机型用rem布局会出现错乱。
  - （2）使用iframe引用也会出现问题。
  - （3）rem在多屏幕尺寸适配上与当前两大平台的设计哲学不一致。即大屏的出现到底是为了看得又大又清楚，还是为了看的更多的问
题。

## 65.几种常见的 CSS 布局
* <font color="red">(需补充)</font>

## 66.画一条 0.5px 的线<font color="red">(需补充)</font>
* 采用meta viewport的方式
采用border-image的方式
采用transform:scale()的方式

## 67.transition 和 animation 的区别<font color="red">(需补充)</font>
* transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线。
* animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。

## 68.什么是首选最小宽度？<font color="red">(需补充)</font>
* “首选最小宽度”，指的是元素最适合的最小宽度。
- 例：汉字中的单字
- 例：英文中的单词
	- 宽度不固定，但可以通过word-break:break-all来实现。

## 69.为什么 height:100% 会无效？<font color="red">(需补充,无效的具体表现？和为设定height时一样？)</font>
* 对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。
原因是如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto，而由于解释成了auto，所以无法参与计算。使用绝对定位的元素会有计算值，即使祖先元素的height计算为auto也是如此。

## 70.min-width/max-width 和 min-height/max-height 属性间发生冲突时的覆盖规则？
* max-width会覆盖width，即使width是行类样式或者设置了!important。
* min-width会覆盖max-width，此规则发生在min-width和max-width冲突的时候
* 总结：min-width > max-width > width

## 71.内联盒模型基本概念<font color="red">(需补充)</font>
* 内容区域（content area）。内容区域指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个字符盒子（character box）；但是有些元素，如图片这样的替换元素，其内容显然不是文字，不存在字符盒子之类的，因此，对于这些元素，内容区域可以看成元素自身。
* 内联盒子（inline box）。“内联盒子”不会让内容成块显示，而是排成一行，这里的“内联盒子”实际指的就是元素的“外在盒子”，用来决定元素是内联还是块级。该盒子又可以细分为“内联盒子”和“匿名内联盒子”两类。
* 行框盒子（line box），每一行就是一个“行框盒子”（实线框标注），每个“行框盒子”又是由一个一个“内联盒子”组成的。
* 包含块（containing box），由一行一行的“行框盒子”组成。

## 72.什么是幽灵空白节点？<font color="red">(需补充)</font>
* “幽灵空白节点”是内联盒模型中非常重要的一个概念，具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同
每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵
一样，但又确确实实地存在（怎么存在？？？）
，表现如同文本节点一样，因此，称其为“幽灵空白节点”。

## 73.什么是替换元素？<font color="red">(需补充)</font>
* 通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。因此，`<img>`、`<object>`、`<video>`、`<iframe>`或者表单元素`<textarea>`和`<input>`和`<select>`都是典型的替换元素
* 特性
  - 内容可替换
  - 外观不受页面上的CSS的影响
  - 有自己的尺寸
  - CSS属性上有自己的一套表现规则
  - 比较具有代表性的就是vertical-align属性，对于替换元素和非替换元素，vertical-align属性值的解释是不一样的。比方说vertical-align的默认值的baseline，很简单的属性值，基线之意，被定义为字符x的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘
  - 所有的替换元素都是内联水平元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认的display值却是不一样的，有的是inline，有的是inline-block。

## 74.替换元素的计算规则？<font color="red">(需补充)</font>
* 替换元素的尺寸从内而外分为3类：固有尺寸、HTML尺寸和CSS尺寸
  - （1）如果没有CSS尺寸和HTML尺寸，则使用固有尺寸作为最终的宽高。
  - （2）如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。
  - （3）如果有CSS尺寸，则最终尺寸由CSS属性决定。
  - （4）如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。
  - （5）如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素。
  - （6）内联替换元素和块级替换元素使用上面同一套尺寸计算规则。

## 75.content 与替换元素的关系？<font color="red">(需补充)</font>
* content属性生成的对象称为“匿名替换元素”（和替换元素的具体关系？？？）
* content生成的内容的特性
  - 我们使用content生成的文本是无法选中、无法复制的，好像设置了user select:none声明一般，但是普通元素的文本却可以被轻松选中。同时，content生成的文本无法被屏幕阅读设备读取，也无法被搜索引擎抓取，因此，千万不要自以为是地把重要的文本信息使用content属性生成，因为这对可访问性和SEO都很不友好。
  - content生成的内容不能左右:empty伪类
  - content动态生成值无法获取。

## 76.margin:auto 的填充规则？<font color="red">(需补充)</font>
* margin的'auto'可不是摆设，是具有强烈的计算意味的关键字，用来计算元素对应方向应该获得的剩余间距大小。但是触发margin:auto计算有一个前提条件，就是width或height为auto时，元素是具有对应方向的自动填充特性的。
（1）如果一侧定值，一侧auto，则auto为剩余空间大小。
（2）如果两侧均是auto，则平分剩余空间。

## 77.margin 无效的情形<font color="red">(需补充)</font>
* （1）display计算值inline的非替换元素的垂直margin是无效的。对于内联替换元素，垂直margin有效，并且没有margin合并的问题。
* （2）表格中的<tr>和<td>元素或者设置display计算值是table-cell或table-row的元素的margin都是无效的。
* （3）绝对定位元素非定位方位的margin值“无效”。
* （4）定高容器的子元素的margin-bottom或者宽度定死的子元素的margin-right的定位“失效”。

## 78.border 的特殊性？<font color="red">(需补充)</font>
* （1）border-width却不支持百分比。
* （2）border-style的默认值是none，有一部分人可能会误以为是solid。这也是单纯设置border-width或border-col
or没有边框显示的原因。
* （3）border-style:double的表现规则：双线宽度永远相等，中间间隔±1。
* （4）border-color默认颜色就是color色值。
* （5）默认background背景图片是相对于padding box定位的

## 79.什么是基线和 x-height？<font color="red">(需补充)</font>
* 字母x的下边缘（线）就是我们的基线。
* x-height指的就是小写字母x的高度，术语描述就是基线和等分线（meanline）（也称作中线，midline）之间的距离。在CSS世界中，middle指的是基线往上1/2x-height高度。我们可以近似理解为字母x交叉点那个位置。
* ex是CSS中的一个相对单位，指的是小写字母x的高度，没错，就是指x-height。ex的价值就在其副业上不受字体和字号影响的内联元素的垂直居中对齐效果。内联元素默认是基线对齐的，而基线就是x的底部，而1ex就是一个x的高度。

## 80.line-height 的特性？<font color="red">(需补充)</font>
* 什么是line-height
- 对于非替换元素的纯内联元素，其可视高度完全由line-height决定。对于文本这样的纯内联元素，line-height就是高度计算的基石，用专业说法就是指定了用来计算行框盒子高度的基础高度。
* 和什么相比较
* 特殊之处

## 81.vertical-align 的特性？<font color="red">(需补充)</font>

## 82.overflow 的特性？
* 1）一个设置了overflow:hidden声明的元素，假设同时存在border属性和padding属性，则当子元素内容超出容器宽度高度限制的时候，剪裁的边界是border box的内边缘，而非padding box的内边缘。
（2）HTML中有两个标签是默认可以产生滚动条的，一个是根元素`<html>`，另一个是文本域`<textarea>`。
（3）滚动条会占用容器的可用宽度或高度。
（4）元素设置了overflow:hidden声明，里面内容高度溢出的时候，滚动依然存在，仅仅滚动条不存在

## 83.无依赖绝对定位是什么？<font color="red">(需补充)</font>
* 没有设置left/top/right/bottom属性值的绝对定位称为“无依赖绝对定位”。
无依赖绝对定位其定位的位置和没有设置position:absolute时候的位置相关。

## 84.absolute 与 overflow 的关系？<font color="red">(需补充)</font>
* 如果overflow不是定位元素，同时绝对定位元素和overflow容器之间也没有定位元素，则overflow无法对absolute元素进行剪裁。

## 85.clip 裁剪是什么？<font color="red">(需补充)</font>
* 实现“可访问性隐藏”的一种方式，使得内容肉眼看不见，但是其他辅助设备却能够进行识别和访问

## 86.relative 的特性？<font color="red">(需补充)</font>
* （1）相对定位元素的left/top/right/bottom的百分比值是相对于包含块计算的，而不是自身。注意，虽然定位位移是相对自身，但是百分比值的计算值不是。
（2）top和bottom这两个垂直方向的百分比值计算跟height的百分比值是一样的，都是相对高度计算的。同时，如果包含块的高度是auto，那么计算值是0，偏移无效，也就是说，如果父元素没有设定高度或者不是“格式化高度”，那么relative类似top:20%的代码等同于top:0。
（3）当相对定位元素同时应用对立方向定位值的时候，也就是top/bottom和left/right同时使用的时候，只有一个方向的定位属性会起作用。而谁起作用则是与文档流的顺序有关的，默认的文档流是自上而下、从左往右，因此top/bottom同时使用的时候，bottom失效；left/right同时使用的时候，right失效。

## 87.什么是层叠上下文？<font color="red">(需补充)</font>

## 88.什么是层叠水平？<font color="red">(需补充)</font>

## 89.元素的层叠顺序？<font color="red">(需补充)</font>

## 90.层叠准则？
* （1）数值大的优先：当具有明显的层叠水平标识的时候，如生效的z-index属性值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。
（2）后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。

## 91.font-weight 的特殊性？<font color="red">(需补充)</font>

## 92.text-indent 的特殊性？<font color="red">(需补充)</font>

## 93.letter-spacing 与字符间距？<font color="red">(需补充)</font>

## 94.word-spacing 与单词间距？
* letter-spacing作用于所有字符，但word-spacing仅作用于空格字符。换句话说，word-spacing的作用就是增加空格的间隙宽度。

## 95.white-space 对换行和空格的控制？<font color="red">(需补充)</font>
* white-space属性声明了如何处理元素内的空白字符，这类空白字符包括Space（空格）键、Enter（回车）键、Tab（制表符）键产生的空白。因此，white-space可以决定图文内容是否在一行显示（回车空格是否生效），是否显示大段连续空白（空格是否生效）等。其属性值包括下面这些：
  - normal：合并空白字符和换行符。
  - pre：空白字符不合并，并且内容只在有换行符的地方换行。
  - nowrap：该值和normal一样会合并空白字符，但不允许文本环绕。
  - pre-wrap：空白字符不合并，并且内容只在有换行符的地方换行，同时允许文本环绕。
  - pre-line：合并空白字符，但只在有换行符的地方换行，允许文本环绕。

## 96.隐藏元素的 background-image 到底加不加载？<font color="red">(需补充)</font>
* 1）元素的背景图片
  - 元素本身设置 display:none，会请求图片 -父级元素设置 display:none，不会请求图片 -样式没有元素使用，不会请求 -:hover 样式下，触发时请求。
* （2）img 标签图片任何情况下都会请求图片

## 97.如何实现单行／多行文本溢出的省略（...）？<font color="red">(需补充)</font>
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

## 98.常见的元素隐藏方式？
* 1）使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
* （2）使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。
* （3）使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
* （4）通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
* （5）通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。
* （6）通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
* （7）通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

## 99.css 实现上下固定中间自适应布局？
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

## 100.css 两栏布局的实现？<font color="red">(需补充)</font>

## 101.css 三栏布局的实现？<font color="red">(需补充)</font>

## 102.实现一个宽高自适应的正方形
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

## 103.实现一个三角形
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


## 104.一个自适应矩形，水平垂直居中，且宽高比为 2:1
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