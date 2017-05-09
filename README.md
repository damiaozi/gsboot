# gsboot
Gulp + Sass + Bootstrap 网页开发实战
所以 简称gsboot，适合新手。

gulp优点
易于使用。构建快速，插件高质，易于学习

sass优点和特性
成熟的css预处理器
让css语言更强大、优雅
允许使用变量、嵌套规则、mixxins、导入等众多功能，并且完全兼容css语法

bootstrap
前端框架

yeoman脚手架
 
具体执行指令如下：
# install yo
cnpm install --global yo

# install a generator
cnpm install --global generator-webapp

# run it
yo webapp

 
期间 会遇到不少问题。

1、bootstrap没有装上等报错。
原因是没有装bower。
解决办法：
cnpm install bower -g

2、sass没装成功
解决办法：
然后安装node-sass
最后安装gulp-sass

cnpm install node-sass  
cnpm install gulp-sass 

 
最后 :
重新运行$ gulp serve，一切正常，大功告成！

