/*async：快速创建异步函数 */
// function fn(){
//     return Promise.resolve(10)
// }
// fn().then(r=>{
//     console.log(r)
// })

/*async
1、作用：通过async来创建一个异步函数
2、异步函数的返回值：会自动封装到一个Promise中返回 */
// async function fn2(){
//     return 10
// }
// let r = fn2()
// console.log(r)//Promise { 10 }
// fn2().then(r=>{
//     console.log(r)//10
// })
/*Promise中解决了异步调用的问题
 */
// function sum(a,b){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(a+b)
//         },1000);
//     })
// }
// async function fn3(){
/*Promise链式调用解决了回调地狱问题，但是链式调用太多以后还是不好理解*/
    // sum(123,456)
    // .then(r=>sum(r,8))
    // .then(r=>sum(r,9))
    // .then(r=>console.log(r))//596
/*以同步的方式取调用异步代码 */
    // let r = sum(123,456)
    // console.log(r)//Promise { <pending> }
/*await
1、作用：通过await取调用异步函数时，会暂停代码运行，当异步调用执行有结果时，才会将结果返回
2、注意：await只能用于asyn声明的异步函数中或es模块的顶级作用域中
3、await：阻塞的只是异步函数内部代码，但不会阻塞异步函数以外的代码
4、通过await调用异步代码时，需要try-catch来处理异常 */
//     try{
//         let r = await sum(123,456)
//         console.log(r)//579
//         r = await sum(r,8)
//         console.log(r)//587
//         r = await sum(r,9)
//         console.log(r)//596
//     }catch(e){
//         console.log("出错了~~")
//     }
// }
// fn3()
// console.log("全局中的输出")
/*5、如果async声明的函数中没有写await，那么它里边就会依次执行 */
// async function fn4(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
// }
// fn4()//为什么与fn5()是等价的？？
// console.log(4)
// function fn5(){
//     return new Promise(resolve=>{
//         console.log(1)
//         console.log(2)
//         console.log(3)
//         resolve()
//     })
// }
// fn5()
// console.log(4)

// async function fn4(){
//     console.log(1)
// /*6、当我们使用await调用函数后，当前函数后边的所有代码会在当前函数执行完毕后被放入到微任务队列中
// 7、await的使用：可以在<script type="module">声明的标签利用，也可以在xxx.mjs中执行*/
//     await console.log(2)
// //await后所有代码都会进入微任务队列中执行
//     console.log(3)//这里开始异步调用
// }
// fn4()
// //console.log(4)不是已经在调用栈里了吗？应该第一执行，再执行fn4()函数中的代码？
// //我自己认为的执行结果是：4 1 2 3
// console.log(4)//调用栈
// // 同学们的解释：fn先执行了log4在后面  promise里面的函数是调用时立即执行的  promise本身是同步。但是promise的回调then和catch是异步的
// //一个await就相当于把它后边的代码放到了一个then里

function fn5(){
    return new Promise(resolve=>{
        console.log(1)
        //加了await
        console.log(2)
        resolve()
    }).then(r=>{
        console.log(3)
    })
}
fn5();
console.log(4);

(async()=>{
    await console.log("报错了");//
})();