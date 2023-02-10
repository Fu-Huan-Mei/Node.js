/*Promise的then方法 */
const promise = new Promise((resolve,reject)=>{
    resolve("周一到周五19.00不见不散！")
    // reject("出错了！")
})
/*promise的链式调用 */
promise
.then(r=>{
    console.log("1","回调函数",r)//1 回调函数 周一到周五19.00不见不散！
    return "锄禾日当午"
})
//相当于p2.then()
.then(r=>{
    console.log("2","第二个then是读取第一个then的返回值中存储的内容即return后边的内容:",r)//2 第二个then 锄禾日当午
    return "汗滴禾下土"
})
.then(r=>{
    console.log("3","第三个then是读取第二个then的返回值中存储的内容即return后边的内容:",r)//3
    return "谁知盘中餐"
})



