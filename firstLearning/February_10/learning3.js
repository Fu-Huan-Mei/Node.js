/*Promise的catch方法：Promise的链式调用，读取的是上一步的执行结果：
如果上一步的执行结果不是当前想要的结果，则跳过当前的方法 */
///*正常数据情况*/
// const promise = new Promise((resolve,reject)=>{
//     resolve("周一到周五19.00不见不散！")
// })
// promise
// .then(r=>"哈哈")//新Promise
// //catch()读取异常数据，如果没有异常数据就不会执行catch()这个方法，即跳过这步直接执行下一步
// .catch(r=>console.log("promise异常处理",r))//不执行
// .then(r=>console.log("promise的第二个then",r))//promise的第二个then 哈哈

// /*异常数据情况*/
// const promise1 = new Promise((resolve,reject)=>{
//     reject("出错了！")
// })
// /*catch()方法后无return */
// promise1
// .then(r=>"呵呵")//新Promise
// //catch()读取异常数据，
// .catch(r=>console.log("promise1异常处理",r))//要执行：promise1异常处理 出错了！  
// //因为catch的返回值是console.log("promise1异常处理",r)，所以第二个then读取到的信息就是undefined
// .then(r=>console.log("promise1的第二个then",r))//promise1的第二个then undefined

// /*catch()方法后有return */
// promise1
// .then(r=>"呵呵")//新Promise
// //catch()读取异常数据，
// .catch(r=>{
//     console.log("promise1异常处理",r)
//     return "嘻嘻"
// })
// //因为catch的返回值是"嘻嘻",所以第二个then读取到的内容就是"嘻嘻"
// .then(r=>console.log("promise1的第二个then",r))//promise1的第二个then 嘻嘻

// /*promise1存储数据异常，但是无catch()方法时:
// 当Promise中有异常数据，无catch()时，则会报错（抛出异常） */
// const promise2 = new Promise((resolve,reject)=>{
//     reject("出错了！")
// })
// promise2
// .then(r=>"哈哈")
// .then(r=>console.log("promise2的第二个then",r))

/*后边代码的catch()方法会处理前边代码的异常错误 */
const promise3 = new Promise((resolve,reject)=>{
    reject("出错了！")
})
promise3
.then(r=>console.log("第一个then",r))
.catch(r=>{
    throw new Eorror("报错了~~")
    console.log("出错了~~")
    return "嘻嘻"
})
.then(r=>console.log("promise2的第二个then",r))
.catch(r=>{
    console.log("出错了")
})