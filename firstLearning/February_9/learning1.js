/*2023-2-9*/
// 1、Node.js
// （1）简介：运行在服务器端的js，编写服务器
// （2）特点
// - 1）单线程、异步、非阻塞
// - 2）统一API
// （3）安装
// - 1）nvm list 显示已安装node的版本
// - 2）nvm install  安装指定版本的node
// - 3）配置nvm的镜像服务器：
// - nvm node_mirror  https://npmmirror.com/mirrors/node
// 2、node.js和javascript区别：
//  （1）javascript：ECMAScript、DOM、BOM
// （2）node.js：ECMAScript
// 3、进程：程序运行环境（厂房）
// 4、线程：运算（工人）
// 5、同步：
// （1）概念：代码自上向下一行一行执行；如果前边代码不执行，则后边代码也不会执行
// （2）问题：阻塞（一行代码执行慢则会影响整个程序执行）
// （3）解决：java和python：多线程、node.js：异步
function sum(a,b){
    const begin = Date.now();
    while(Date.now()-begin < 10000){

    }
    return a + b
}
console.log("111");
// const result = sum(123,456);//阻塞
// console.log(result);
console.log("222");
//6、异步
//（1）概念：一段代码执行不会影响到其他程序
function sum(a,b){
    const begin = Date.now();
    setTimeout(() => {
        return a + b
    }, 10000);
}
// console.log("111");
// result = sum(123,456);
//（2）问题：异步的代码无法通过return来设置返回值
// console.log(result);//undefined
// console.log("222");
function sum(a,b,cd){
    const begin = Date.now();
    setTimeout(() => {
        cd(a + b)//cd()就相当于调用箭头函数(result)=>{} ( )，
        //a+b就相当于传递给箭头函数的一个实参，result就相当于箭头函数的形参
        //cd(a+b)=》(result)=>{a+b}=>运行结果：result=a+b
    }, 1000)
}
console.log("111");
//（3）解决：通过回调函数来返回结果；但是代码可读性差，可调试性也差
const result = sum(123,456,(result)=>{
    // console.log(result);//result=a+b
    sum(result,7,(result)=>{
        // console.log(result)
        sum(result,8,(result)=>{
            // console.log(result)
        })
    })
});
console.log("222");
//（4）解决：使用promise（存储数据对象）来代替回调函数的返回结果