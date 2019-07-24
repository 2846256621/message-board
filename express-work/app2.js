
/***！！！
 * 没有views文件夹，统一在public 目录下 而html文件在static目录下
 *
 * 所以默认路径需要修改 app.set('views','public/static');
 *
 * 若没有views文件夹，html文件统一在public 目录下 app.set('views','public');
 *
 * */
let express = require("express");
let app = express();
const fs = require('fs');
app.use('/public/',express.static('./public'));
app.use('/resource/',express.static('./resource'));  //公开资源目录
app.use('/static/',express.static('./static')); //公开html目录
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
app.set('views','public/static');

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

app.get('/add',function (req,res) {
    let rest = req.query;
    datas.unshift(rest); //加入到文件里
    res.redirect('/'); //重定向
});



app.listen(8080,function () {
    console.log("http://localhost:8080");
});