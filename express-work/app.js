const express = require("express");
//创建服务器 相当于 http.createServer
const bodyParser = require('body-parser');
let app = express();

//当服务器收到get请求时  app.get()  相当于一次次 判断
app.get('/',function (req,res) {
    res.send("hello world");  //相当于 res.end()  send的好处是 能够自动设置mime类型
});
app.get('/test',function (req,res) {
    console.log(req.query);  //得到get请求发送的数据  req.query
    res.send("wonderful morning!");
});


/***
 * 当服务器收到post请求时
 * 需要第三方包
 * 安装 npm install body-parser
 * 配置
 * // parse application/x-www-form-urlencoded
 * app.use(bodyParser.urlencoded({ extended: false }))

 * parse application/json
 * app.use(bodyParser.json())
 * app.use(function (req, res) {
 * res.setHeader('Content-Type', 'text/plain')
 * res.write('you posted:\n')
 * res.end(JSON.stringify(req.body, null, 2))
}) **/

//配置文件  完成后会得到一个新属性  req.body 即post发送的数据
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2))
});
app.post('/',function (req,res) {
   console.log(req.body);
});

//公开目录的三种方式：
//1.可以访问此目录下的文件资源   即 http://localhost:3030/static/home.html
app.use('/static/',express.static('./static'));  //用的多

//2.当没有第一个参数时，访问时也要删除第一个参数  即 http://localhost:3030/home.html
// app.use(express.static('./static'));

//3.可以给目录起别名 即 http://localhost:3030/public/home.html  即static的别名是public
// app.use('/public/',express.static('./static'));

/***
 * 文件操作路径
 *   ./static/home.html  相对路径 相当于当前目录   (./不能省略)
 *   static/home.html  相对路径 相当于当前目录    (要省略 ./都要省略)
 *   /static/home.html 绝对路径 当前文件所属的磁盘根目录 （错误写法）
 *
 * 模块操作路径：
 *   ./static/home.html  相对路径 相当于当前目录   (./不能省略！！！)
 * */

//相当于http.listen 监听
app.listen(3030,function () {
   console.log('http://localhost:3030');
});


/***
 * express 中使用 art-template模板渲染
 * 1.安装
 * npm install art-template --save
 * npm install express-art-template --save
 *
 * 2.配置
 * 以.art结尾的文件，使用express-art-template模板引擎
 * app.engine('art',require('express-art-template')
 *
 * 提供render()方法
 * res.render('html模板名',{模板数据}); 第一个参数不用写路径，默认会去找路径
 * */

/***！！！
 * 没有views文件夹，统一在public 目录下 而html文件在static目录下
 *
 * 所以默认路径需要修改 app.set('views','public/static');
 *
 * 若没有views文件夹，html文件统一在public 目录下 app.set('views','public');
 *
 * 若有views文件夹  默认路径不需要修改
 * */