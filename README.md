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
  
  / 打包目录 ，同过'jsx dev/ /' 将dev目录中的js转换到components目录
