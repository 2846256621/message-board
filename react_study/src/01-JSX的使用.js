
//1.导入文件 接收的成员名称 必须这么写
import React from 'react';  //创建组件，虚拟Dom元素，生命周期
import ReactDom from 'react-dom'; // 把创建好的组件 和虚拟dom 放到页面上


/**
 * 2. 创建虚拟dom的元素
 *  参数1：创建的元素的类型：字符串、表示元素的名称
 *  参数2：是一个对象 或null 表示当前这个dom 元素的属性
 *  参数3：子节点（包括 其他 虚拟dom 获取文本子节点）
 *  参数n：其他的子节点
 * */
//const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个h1');
//const myDiv = React.createElement('div',null,'这是一个div',myh1);

/**
 * 4. 每次创建元素太麻烦，使用JSX创建
 * 注意：在js文件中，默认不能写 这样类似于 HTML的标记语言，否则会打包失败
 * 可以使用 babel 来转换这些 js中的标签
 * 在js中混合写入的 类似于html 的语法，叫JSX语法，符合 XML规范的js
 * JSX语法的本质，在运行的时候，还是会被转换成React.createElement形式来执行的
 * */

const newDiv= <div id="mydiv" title="this is my div">这是一个div元素</div>;

/**
 * 3.使用ReactDom来渲染到页面上
 *  参数1：要渲染到页面上的虚拟dom元素
 *  参数2：指定页面上一个dom元素当做一个容器
 *  */

let a = '这是变量a';
let b = 12;
let boo = true;

// 外部进行for循环
const arrStr = ['毛利小五郎','柯南','小兰'];
let nameArr = [];
arrStr.forEach(item=>{
    nameArr.push(<h5>{item}</h5>);
});

// 数组的map方法
nameArr = arrStr.map(item=>{
    return item +'~~~'
});


ReactDom.render(<div id="mydiv" title="this is my div">
    {b+1}{a}
    <hr/>
    <p title={a}>p标签</p>
    {boo?'条件为真':'条件为假'}
    {/*jfijfiaj*/}
    <hr/>
    {arrStr.map(item=> <div key={item}><h4>{item}</h4></div>)}
    <hr/>
    <p className={a}>jfijfi</p>
    </div>,document.getElementById('app'));


/**
 * 安装babel 6.0版本的  不然报错
 * 配置webpack 第三方匹配规则
 * 新建一个 .babelrc文件 配置
 *
 **/