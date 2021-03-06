﻿const koa = require("koa");
const static = require("koa-static");
const routers = require("./routers"); //自定义路由返回的不是函数，不能直接作为中间件使用
const cors = require('koa-cors')



//实例化koa应用
const app = new koa();

//使用第三方模块koa-static创建静态服务器
app.use(static("./"));
app.use(cors())

app.use(routers.routes());
// app.use(routers.allowedMethods());

app.listen(3020, () => {
     console.log("3020接口服务器启动");
 });
