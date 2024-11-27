import data from "./db.js"; // 引入 Mock.js 生成的数据
import jsonServer from "json-server";

// 返回express服务器
const server = jsonServer.create();
// 返回json服务器路由
// router中的参数可以是一个json文件地址，也可以是一个对象。即： （path | object)
const router = jsonServer.router(data());
// 返回JSON服务器使用的中间件（用来处理静态资源的-默认为public目录下的静态资源）
const middlewares = jsonServer.defaults();

// 使用中间件
server.use(middlewares);

// 配置自定义路由
server.use(router);
// 可以在路由前添加前缀，以下表示访问路由以/api开头
// server.use("/api", router);

// 启动服务器
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
