
/***！！！
 * 有views文件夹  默认路径不需要修改
 * */

let express = require("express");
const bodyParser = require('body-parser');
let app = express();

app.use('/resource/',express.static('./resource'));  //公开资源目录
app.use('/views/',express.static('./views')); //公开html目录
let datas = [
    {
        "name":"小仙女",
        "content":"你好哇，我是第一次来到这里"
    },{
        "name":"我的新留言",
        "content":"像梦一样，像梦一样自由"
    },{
        "name":"更新",
        "content":"用了art-template模板，写出来真开心"
    },{
        "name":"心爱的你",
        "content":"那些年，美好的昨天"
    }];

//修改render的默认路径
// app.set('views','public/views');

//以.html文件结尾的时候  使用express-art-template模板引擎
app.engine('html',require('express-art-template'));

app.get('/',function (req,res) {
    res.render('index.html',{
        data:datas
    });
});
app.get('/goto',function (req,res) {
    res.render('goto.html'); //读取数据，可以不用渲染

});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add',function (req,res) {
    let data = {title:'post方式'};
    let rest = req.body; //得到前台post传过来的数据

    res.send(data); //后台返回数据  字符串
    datas.unshift(rest); //加入到文件里
    res.redirect('/'); //重定向

});
app.get('/add',function (req,res) {
    let rest = req.query; //前台get传过来的数据

    let data = {title:'get方式'};
    res.send(data) ;//后台返回数据 json

    datas.unshift(rest); //加入到文件里
    res.redirect('/'); //重定向
});
app.listen(8080,function () {
    console.log("http://localhost:8080");
});