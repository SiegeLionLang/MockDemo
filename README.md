# json-server + mock.js模拟接口数据demo
<img src="./src/mock/public/images/dog.jpg" alt="Example Image" width="100%" />

---
此项目是一个完整的模块化使用`json-server`的demo，API通过`json-server`模拟，接口数据通过`mock.js`创建。使用`jsonServer.defaults()`支持静态服务。不含接口调用哈。

- 用户接口。通过`http://localhost:3000/users`访问；
- 文章信息接口。通过`http://localhost:3000/articles`访问；
- 小狗图片dog.jpg。通过`http://localhost:3000/images/dog.jpg`访问；
  
坑点：
- json-server使用最新版本`v1.0.0-beta.3`在node运行脚本时会报各种错，这个似乎是一个官方未解决的[bug](https://github.com/typicode/json-server/issues/1557#:~:text=i%20think%20this,up%20for%20free)。