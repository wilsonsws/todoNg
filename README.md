# todoNg
A todo webapp using AngularJS

###任务描述：###
使用AngularJS开发一个TODO应用，数据存于内存 要求使用Directive 

###准备工作：###
已安装Node.js  
**npm install -g fis3** (全局安装)    
**npm install -g fis-parser-jade** （安装jade支持插件）  
**npm install -g fis-parser-stylus2** （安装stylus支持插件）  
**npm install -g fis3-postpackager-loader** （安装打包插件，似乎可以省略）  

此repository为实现功能后的项目文档

###查看方式：###
**fis3 release** （在根目录下输入）  
**fis3 server start**  
浏览器打开 *http://127.0.0.1:8080* 查看

###说明###
文件夹中Jade版本中按钮之间没有间距，因为目前掌握的jade知识暂时无法输出有换行的html，这里未采用jade版本  
实现过程中为了读取list数据方便使用了一个controller，可能不算严格使用directive  
**此项目参考了*http://www.runoob.com/angularjs/angularjs-bootstrap.html*中对Bootstrap使用的例子**  
