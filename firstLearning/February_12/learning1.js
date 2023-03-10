/*宏任务和微任务*/
//开启定时器
//定时器作用：间隔一段时间后，放入到任务队列中
//第三执行：宏任务
// setTimeout(()=>{
//     console.log(1)//在回调函数里
// },0)

// /*Promise的执行原理：Promise在执行时，then就相当于给Promise绑定了回调函数：
// 当Promise的状态从pending变为fulfilled时，then的回调函数就会被放入到任务队列中 */
// //第二执行：微任务
// Promise.resolve(1).then(()=>{
//     console.log(2);
// })
// //第一执行：调用栈
// console.log(3);//全局作用域，在调用栈中
/*
1、JS是单线程的，它的运行是基于事件循环机制(event loop)
2、调用栈   eg:枪支中的子弹
（1）栈：数据结构，后进先出，放着要执行的代码
（2）调用栈：执行环境（作用域）
3、队列（消息/任务/事件队列）eg:排队取奖品
（1）含义：数据结构，先进先出
（2）执行：当调用栈中的代码执行完毕后，队列中的代码才会按照顺序依次进到栈中执行
（3）类型：
宏任务队列：大部分代码都去宏任务队列排队
微任务队列：Promise回调函数（then、catch、fianlly）
（4）整个流程： 先执行调用栈中的代码，再执行微任务队列中的所有任务，最后执行宏任务队列中的所有任务*/
/*4、 queueMicrotask()用来向微任务队列中添加一个任务*/
// setTimeout(()=>{//宏任务
//     console.log(4);
// })
queueMicrotask(()=>{
    console.log(2);//微任务(代码排在前面)
})
// console.log(1);//调用栈
// //向微任务队列中添加一个任务（代码排在后面）
// Promise.resolve().then(()=>{
//     console.log(3);
// })
// Promise.resolve().then(()=>{
//     setTimeout(() => {
//         console.log(5);
//     });
// })
Promise.resolve().then(()=>{
    Promise.resolve().then(()=>{
        console.log(3);
    })     
})