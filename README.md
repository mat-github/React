# React
React 入门

Hello, world!

react 15.x

无论是在当前页面写jsx 还是通过分离文件的形式去写jsx
type="text/babel" 才能通过browser.min.js去转换es来识别

已分离文件的形式去写jsx的时候
某些浏览器（如，Chrome浏览器）将无法加载 type="text/babel"该类型文件，除非它通过HTTP服务。


推荐react-tools的离线转换 或 webpack 来使用



index.html

离线模式

npm install -g react-tools

jsx --watch src/ build/  将jsx代码转换为js


js目录：需要的js框架或依赖

components目录：组件模块

  /dev 开发模块，jsx目录

  / 打包目录 ，通过'jsx dev/ /' 将dev目录中的js转换到components目录

版本6：离线版 React

版本7:React 构造函数

版本9：state 和props 应用数据 State vs Props & Application Data

修改目录：

DEV/ ：为开发目录

components/ ：模块目录 通过react-tools的jsx命令会自动打包到改目录

js/ ：react、react-dom 等框架目录
