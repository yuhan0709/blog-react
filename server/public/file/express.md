# 中间件
路由get、post这些东西就是中间件，中间件讲究顺序，一般在匹配上第一个之后就不会再向下匹配。

除非加上next参数

没有next参数，就匹配第一个录用
```
var express = require("express");
var app = express();
app.get("/",function(req,res){
    console.log("1");    
});

app.get("/",function(req,res){
    console.log("2");    
});
//只会打出1
```
加上next参数之后就可以打出2
```
var express = require("express");
var app = express();
app.get("/",function(req,res,next){
    console.log("1");   
    next();
});
//加入了next参数会继续向下匹配
app.get("/",function(req,res){
    console.log("2");    
});
//只会打出1
```
下面两个路由看似没有关系，但其实是有冲突的
```
app.get("/:username/:id",function(req,res){
  res.send("用户信息"+req.params.username);
})

app.get("/admin/login",funtion(req,res){
  res.send("管理员登录");  
})
```
在这里如果访问/admin/login会匹配上第一个。而不是第二个。

解决方法

- 调换位置。（具体的路由写在上面，比较抽象的写在下面）
```
//匹配上第一个就结束了，为匹配上第一个则继续向下。
app.get("/admin/login",funtion(req,res){
  res.send("管理员登录");  
})

app.get("/:username/:id",function(req,res){
  res.send("用户信息"+req.params.username);
})

```
- next 检索数据库
```
app.get("/:username/:id",function(req,res,next){
    var username  = req.params.username;
if(查询数据库){  //如果数据库中存在这个用户名，则输出用户信息
    res.send("用户信息"+req.params.username);
    }else{
      next();
  }
});

app.get("/admin/login",funtion(req,res){
  res.send("管理员登录");  
});

```

## use中间件
use是一个很特殊的中间件。与get、post不同的是，他的网址不是精确匹配的。而是可以扩展的。
```
//如果输入 /admin/aa/bb/cc
app.use("/admin",function(req,res){
  console.log(req.originalUrl+"\n");  //  /admin/aa/bb/cc
  console.log(req.baseUrl+"\n");      //    /admin
  console.log(req.path+"\n");         //    /aa/bb/cc
  res.end("你好");
})
```
如果相对所有网址都添加中间件
```
app.use(function(req,res,next()){
    console.log(new Date().toString()); //访问任何网址都会打印出此网址访问时的时间
    next();
})
```
app.use的静态资源服务
```
app.use(express.static("./public"));  //直接读取文件夹里的文件。
```

## render
- 大多数情况下，渲染内容用res.render()，将会根据views中的模板文件进行渲染文件夹。如果向自己设置文件夹名，那么用app.set("views","a");
**render的例子可看模板引擎.md文件**


