/*定义类的思路：
1、先把功能分析清楚，再动手
2、边想边写 */
//????听不懂？？以前的JS没有学好
const PROMISE_STATE = {
    PENDING:0,
    FULFILLED:1,
    REJECTED:2
}
class MyPromise {
    //创建一个变量来存储Promise的结果
    #result
    //创建一个变量来记录Promise的状态
    #state = PROMISE_STATE.PENDING//0pending 1fulfilled 2rejected
    //创建变量存储回调函数
    #callback
    constructor(executor){//接收执行器executor作为形参
        // executor()//调用回调函数
        //方法三:调用bind
        executor(this.#resolve.bind(this),this.#reject.bind(this))
    }
        //存数据
        #resolve(value){
            //禁止值被重复修改
            if(this.#state !== PROMISE_STATE.PENDING) return
            this.#result = value
            this.#state = PROMISE_STATE.FULFILLED//数据填充成功
            //当reslove执行时，说明数据已经进来了，需要调用then的回调函数
            this.#callback&&this.#callback(this.#result)
        }
        #reject(reason){ }//私有方法：存储错误的数据
        //添加读取数据的then方法
        then(onFulfilled,onRejected){
            if(this.#state === PROMISE_STATE.PENDING){
                //进入判断说明数据还没有进入Promise，将回调函数设置为callback的值
                this.#callback = onFulfilled
            }
            if(this.#state === PROMISE_STATE.FULFILLED){
                /*问题：then只能读取已经存储到Promise的数据，不能读取异步读取的数据 */
                onFulfilled(this.#result)
            }
        }
}

const mp = new MyPromise((resolve,reject)=>{//(resolve,reject)=>{ }实参
    // console.log("回调函数执行了~~")//调用回调函数才会执行
    // resolve("孙悟空")//以函数形式调用
    setTimeout(()=>{
        resolve("孙悟空")
    },1000)
})
mp.then((result)=>{
    console.log("读取数据",result)
})