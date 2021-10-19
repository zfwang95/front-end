#### Bash
* Bash是shell的一种
* Bash用于Unix、Linux系统
* zsh表示Z Shell
* 终端模拟器/终端程序的功能：使得用户可以进入CLI，使用Shell
* echo：作用相当于sprint
* 引号内的回车被视为换行
* echo 的 `-n`参数可以消除命令结果的回车符
  * echo -n 后不跟其他命令：下一行的提示符跟在输出结果后
  * echo -n; xxx:两次的输出结果展示在同一行
* echo 的 `-e`参数使特殊字符生效（如`\n`）
* 可使用`\`把一行命令拆分成多行
* `&&`和`||`的使用
  * `command1 && command2`: 执行command1成功才会执行command2
  * `command1 || command2`: 执行command1失败才会执行command2
* `type command`语句返回command的类型，可能的返回值有：
  * `command is a shell builtin`
  * `command is hashed (/path)`
* 模式扩展（功能类似于正则表达式）
  * 可关闭
  * `~`：自动扩展为当前用户的主目录
  * `?`：匹配单个字符，
  用法示例：`ls ??.txt`,`echo ???.txt`
  * `*`：匹配任意数量的任意字符
  * `[]`：
    * `[xxx]`:匹配括号内的任意一个字符
    * `[!xxx]`,`[^xxx]`:匹配不在括号内的任意一个字符
    * 常见的方括号的应用的简写：[a-z],[a-c],[0-9],[a-zA-Z]
  * `{}`:遍历匹配，
  用法示例：`echo d{a,o,u}g`
  上方示例等效于：`echo -n dag; echo -n dog; echo -n dug`
    * 常见的花括号的应用的简写：`{1..5}`,`{a..c}`
  * 变量扩展：如`${!S*}`匹配所有`S`开头的变量名
  * 子命令扩展（类型函数的调用）：如`$(...)`表示括号内命令的结果
  * 算数扩展：子命令扩展的特例，如`$((2+2))`，即表示`4`
  * 字符类：表示某一类字符中的任意一个，如`[[:alnum:]]`表示英文字母或数字,`[[:alpha:]]`表示英文字母
* shopt命令：用于开/关/查某个Bash参数