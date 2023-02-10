/*Promise详解 */
//1、Promise：存储数据的对象，但由于存储方式比较特殊，所以可以直接将异步调用结果存储到Promise中
//（1）resolve存储正常数据
//（2）reject存储异常数据
// const promise = new Promise((resolve,reject)=>{
//     resolve("周一到周五19.00不见不散！")
//     // reject("出错了！")
// })
// const p2 = promise.then()
// console.log(p2)//Promise { <pending> }
//（3）then、catch、finally这三个方法都会返回一个新的Promise，Promise中会存储回调函数的返回值
//（4）finally的返回值不会存储到Promise中
// const p2 = promise.then(r=>{
//     console.log("1","回调函数",r)//第二执行:1 回调函数 周一到周五19.00不见不散！
//     return "锄禾日当午"
// })
// console.log('2',p2)//先执行 :2 Promise { <pending> }
// const p3 = p2.then(r=>{
//     console.log("3","回调函数",r)//第三执行:3 回调函数 锄禾日当午
//     return "绝知此事要躬行"
// })


// promise.then(result=>{
//     console.log(result)
// },reason=>{
//     console.log("出错了",reason)
// })

//通过回调函数实现异步，会出现回调地狱的问题
// function sum(a,b,cb){
//     setTimeout(()=>{
//         cb(a+b)
//     },1000)
// }
// sum(123,456,(result)=>{
//     console.log(result)
// })

//使用promise来解决回调地狱的问题，但未解决
function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)//正常结果存储到resolve中
        },1000)
    })
}
sum(123,456)
    .then(r=>r+7)
    .then(r=>r+8)
    .then(r=>console.log(r))//594
// const r = sum(123,456)
// console.log(r)//重点：Promise { <pending> }  即sum函数返回值得到的是一个Promise对象，存储数据的对象
// //重点：调用then()方法来读取Promise对象中存储的数据
// sum(123,456).then(r=>{
//     // console.log(r)//579
//     sum(r,7).then(r=>{
//         sum(r,8).then(r=>{
//             console.log(r)//594
//         })
//     })
// })

