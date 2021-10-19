
#### HTTP状态码
* 网络请求的基本流程：
  1. 浏览器向网页服务器发送请求
  2. server返回server header（包含http status code）
  3. （若第2步成功，）server返回网页数据
* 常见状态码
  * 200: 成功
  * 301: 资源永久转移到其他URL
  * 404: 资源不存在
  * 500: 内部服务器错误
* 基本分类
  * 1xx：服务器表示收到请求，但需要请求者的进一步操作
  * 2xx：成功
  * 3xx：重定向，需要进一步操作
  * 4xx：客户端错误，请求包含语法错误或无法完成
  * 5xx：服务器错误
* HTTP基本特性
  * HTTP：HyperText Transfer Protocol, 超文本传输协议
  * HTTP基于TCP/IP通信协议
  * HTTP客户端（浏览器） ——URL——> HTTP服务器（WEB服务器）
  * Web服务器：
    * Apache服务器
    * IIS服务器（Internet Information service）
  * HTTP默认端口为80
  * HTTP功能特性：
    * 无持续连接：一次连接只处理一个请求
    * 媒体独立：HTTP传送的数据类型无特别限制（文本，音、视频都行）
    * 无状态：不记录历史事件
* HTTP消息结构
  * URI（Uniform Resource Identifiers, 统一资源标识符）
  * 客户端请求信息：请求行 + header + 空行 + 请求数据
    * 请求行（request line）：请求方法 + URL + 协议版本
    例：GET /index.html HTTP/1.1
  * 服务器响应信息：状态行 + 消息报头 + 空行 + 响应正文
    * 状态行： 协议版本 + 响应状态码 + 状态码描述
    例：HTTP/1.1 200 ok
* HTTP请求方法
  * HTTP1.0: GET、POST、HEAD；
  HTTP1.1: OPTIONS、PUT、PATCH、DELETE、TRACE、CONNECT
  * GET: 请求页面信息，返回实体主体
  * POST: 向指定资源提交数据
  * HEAD: 类似GET，但仅返回报头，用于检查对象是否存在
  * OPTIONS:查看服务器性能
  * PUT:发送新数据以取代旧数据
  * PATCH:类似PUT，用于资源局部更新
  * DELETE:删除页面
  * TRACE:展示服务器接收的请求，用于测试/诊断
  * CONNECT:用于管道连接的代理服务器
* 消息报头response header中的connect-type的分类：
  * `text/`开头：？？？
  * `image/`开头：？？？
  * `application/`开头：？？？
  * connect-type的作用：指明文件的读取方式
* HTTP状态码详解（碎片知识）
  * `500`和`503`的区别：`500`是无法完成请求， `503`是暂时不能处理请求（可预知恢复正常的时间）
  * HTTP/1.0协议不支持“1xx”的状态码
  * `600`表示只返回实体，没返回header
  * POST和PUT的具体区别：
    * 用途上，POST为创建资源，PUT为更新已有数据
    * 工作方式上，POST在请求的URI上添加新后缀，并以生成的新的URI创建资源；PUT直接以请求的URI更新资源
* 请求头由key-value组成，常见的key有：
  * User-Agent: 发起请求的浏览器的类型
  * Accept: 客户端可识别的内容类型
  * Host: 请求的主机名
* 请求正文的数据大小限制不来自于HTTP协议（协议本身无限制）
  * GET：限制来自于浏览器
  * POST：限制来自于Web服务器
* POST比GET安全：GET的数据以明文的形式展示于URL
* 一次完整的HTTP请求：
  1. 建立TCP连接
  三次握手：
  a. 确认服务端可接收消息
  b. 确认客户端可接收消息
  c. 客户端（通过发送消息）表示开始发送消息
  2. 客户端向服务端发送请求
  依次发送请求行、请求头、空行，必要时（如方法为POST时）发送请求体
  3. 服务端向客户端响应
  依次发送状态行、消息报头、空行、响应正文
  4. 服务器关闭TCP连接（请求头中Connection值为keep-alive时不关闭）
* HTTPS——HTTPS在HTTP的基础上增加了：加密（内容加密）、认证（验证通信方身份）、完整性保护（验证报文完整性，防篡改）
* HTTP相关面试题
  * 浏览器访问url的具体流程：
    1. DNS解析（域名解析为IP地址）
    2. TCP连接（三次握手）
    3. 发送HTTP请求
    4. 服务器处理请求并返回报文
    5. 浏览器解析返回报文并渲染页面
    6.服务器断开连接，TCP四次挥手
  * GET和POST的区别？？？
    * GET发送一个TCP数据包（header + data）
    * POST发送2个TCP数据包（先发header，得到100即continue的响应后，再发送data）
  * cookies和session的区别？？？
  * HTTP状态码不同数字开头的区别（已知）
  * HTTP的请求方式？？？
  * HTTP和HTTPS的区别（更具体的？？？）
  * 请求报文、响应报文的结构？？？
  * POST提交数据的具体方式
  * DNS简介
  * http协议的无状态特性及弥补方式（cookie、session）
  * 不同版本HTTP的区别
    * HTTP/1.0:一次一个请求，收、发数据分开
    * HTTP/1.1:一次可多个请求，收、发可同时；字段更多（cache-control、keep-alive）；默认持久连接；不必等待响应就能继续发送请求；分块传输，支持断点续传
    * http/2.0：数据传输格式为二进制（不再是文本格式）；对消息头使用hpack压缩算法；
    多路复用，并发请求，一个tcp连接处理所有请求；服务端可主动推送css、jsp文件（避免了客户端解析HTML后再发送请求）
  * 目前HTTP/1.1使用最广泛；HTTP/2.0也有了较普遍的支持
  * HTTP握手的目的/效果：客户端和服务端确立双方加密传输数据的密码信息
  * 浏览器渲染的步骤？？？
  * 同源策略？？？
  * 同源策略的应用范围：
    * cookie、localStorage、IndexDB
    * DOM节点
    * AJAX
  * 跨域解决方案？？？
  * 页面渲染优化
  * 缓存
    * 强制缓存：定期从服务端获取数据，更新本地缓存，此外仅使用客户端的数据
    * 协商缓存：从响应头的信息判断服务端资源是否修改，是则重新获取，否则从本地缓存获取
  * 304过程（于客户端缓存相关）？？？
  * URI和URL的区别
  * HTTP工作原理
