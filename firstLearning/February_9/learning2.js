/*Promise */
// function sum(a,b){
//     return a+b
// }
// const r = sum(123,456);
// console.log(r);
//通过回调函数来获取结果
function sum(a,b,cb){
    cb(a+b)//就相当于调用function()函数
}
sum(123,456,function(result){
    // console.log("回调函数执行了~~");
    // console.log(result);//579
});

//1、异步调用：必须通过回调函数来获取返回数据，但当我们进行复杂调用时，会出现"回调地狱"
//2、问题：异步必须通过回调函数来返回结果，回调函数多就很复杂
//3、解决：Promise帮助解决异步中回调函数中的问题
//4、Promise
//（1）简介：存储数据的容器，拥有一套特殊的存储数据的方式，该方式使得它里边可以存储异步调用的结果
//（2）创建Promise:构造函数中需要函数作为参数
/*（3）Promise构造函数中的回调函数：
会在创建Promise时调用，调用时会有两个参数传递进去
resolve和reject是两个函数，通过这两个函数可以向Promise中存储数据
resolve在执行正常时存储数据，reject在执行错误时存储数据*/

const promise = new Promise((resolve,reject)=>{
    // resolve("resolve返回的数据",resolve);//promise中的数据 resolve返回的数据
    // reject("reject返回的数据",reject);//数据 reject返回的数据

//（4）增：通过函数向Promise中添加数据：可以用来添加异步调用的数据
//     setTimeout(()=>{
//         resolve("哈哈哈")
//     },2000)
})

// setTimeout(()=>{
//     console.log(promise);//Promise { '哈哈哈' }//如果Promise也延时3秒，那么就看可以打印处“哈哈哈”
// },3000)

// console.log(promise);//Promise { <pending> }  promise执行时，resolve()函数还没有把参数传递给构造函数，所以就不能打印出来"哈哈哈”

//（5）读：从Promise中读取数据：可以通过Promise的实例方法then来读取Promise中存储的数据
//（6）then：需要两个回调函数作为参数，用来获取Promise中的数据
//调用then()方法
console.log(promise);//Promise { <pending> }
promise.then((result)=>{
    //（7）区分
    //存数据并由Promise创建的函数：resolve、reject
    //取数据并由程序员手动添加的回调函数：(result)=>{}、(resolve)=>{}
//（8）通过resolve存储的数据，会调用第一个函数返回，可以在第一个函数中编写处理数据的代码
    console.log("promise中的数据",result);
},(reason)=>{
//（9）通过reject存储的数据或者出现异常时，会调用第二个函数返回，可以在第二个函数中编写处理异常的代码
    console.log("数据",reason);
})
//？？听到这里我有点儿蒙圈了：Promise中存数据和取数据的两个参数有什么关系？？？

const promise2 = new Promise((resolve,reject)=>{
    resolve("哈哈")//??为为什么可以打印出{"哈哈"}
})
console.log(promise2);//Promise { '哈哈' }

//（10）Promise中维护了两个隐藏属性：PromiseResult存储数据和PromiseState记录Promise的状态：pending进行中、fulfilled完成、rejected拒绝/出错了
//（11）PromiseState：pending进行中、fulfilled完成：通过resolved储存数据、rejected拒绝/出错了：出错了或通过reject存储数据
//（12）注意：PromiseState只可修改一次，修改后永远不会发生改变
