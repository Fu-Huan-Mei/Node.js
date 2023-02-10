/*静态方法 */
//方法二和方法一一样
// new Promise((resolve,reject)=>{
//     resolve(10)
// })
// //方法一和方法二一样，但是更简单
// /*1、Promise.resolve()创建一个立即完成的Promise */
// Promise.resolve(10).then(r=>console.log(r))//10

// /*2、Promise.reject()创建一个立即拒绝的Promise */
// Promise.reject("错误").catch(r=>console.log(r))//错误

// /*3、Promise.all([...])同时返回多个Promise的执行结果，但其中有一个错误信息就会报错*/
function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)//正常结果存储到resolve中
        },1000)
    })
}
// Promise.all([
//     sum(123,456),
//     sum(5,6),
//     sum(7,8)
// ]).then(r=>{
//     console.log(r)//[ 579, 11, 15 ]
// })
// Promise.all([
//     sum(123,456),
//     sum(5,6),
//     //其中有一个错误信息就会报错
//     Promise.reject("哈哈，我拒绝"),
//     sum(7,8)
// ]).then(r=>{
//     console.log(r)//报错
// })

/*4、Promise.allSettled([...表示数组])无论执行结果是否正常，都会同时返回多个Promise的执行结果*/
// Promise.allSettled([
//     sum(123,456),
//     sum(5,6),
//     sum(7,8)
// ]).then(r=>{
//     console.log(r)//[ { status: 'fulfilled', value: 579 }, { status: 'fulfilled', value: 11 },{ status: 'fulfilled', value: 15 }]
// })

/*5、Promise.race([...])返回执行最快的Promise（不考虑对错）*/
//正常
// Promise.race([
//     sum(123,456),
//     sum(5,6),
//     sum(7,8)
// ]).then(r=>{
//     console.log(r)//579
// })
//异常
// Promise.race([
//     Promise.reject(1),
//     sum(123,456),
//     sum(5,6),
//     sum(7,8)
// ])
// .then(r=>{
//     console.log(r)
// })
// .catch(r=>{
//     console.log("错误！")//错误
// })

/*6、Promise.any([...])返回执行最快的完成的Promise*/
//正常
Promise.any([
    sum(123,456),
    sum(5,6),
    sum(7,8)
]).then(r=>{
    console.log(r)//579
})
//异常
Promise.any([
    Promise.reject(1),
    sum(123,456),
    sum(5,6),
    sum(7,8)
])
.then(r=>{
    console.log(r)//579
})
.catch(r=>{
    console.log("错误！")
})
//全报错，都被拒绝了
Promise.any([
    Promise.reject(1),
    Promise.reject(2),
    Promise.reject(3)
])
.then(r=>{
    console.log(r)
})
.catch(r=>{
    console.log("错误！")
})

