## node
   - 时间驱动，非阻塞I/O模型
   - 可以用来做啥子：搜索引擎优化+首屏优化=服务端渲染
   - 构建工作流
   - BFF层
     - 对用户提供HTTP服务
     - 使用后端RPC服务
   - common.js
     - exports.hello = 'world'
     - exports.geekbang = function (a,b) {

     }
     - webpack --devtool node --mode develpment --target node  index.js
     - process.argv
     - process.stdin.on()
     - npm event-stream 事件
     - require('events').EventEmitter
       - 观察者模式
       - 调用vs抛事件
         - 关键在于不知道被通知者存在
         - 以及没有人听还能继续下去
     ```js
       const EventEmitter = require('events').EventEmitter
       class Geektime extends EventEmitter {
         constructor() {
           super();
           setInterval(() => {
             this.emit('newlessson', { price: Math.random()*100})
           },3000)
         }
       }
       const geektime = new Geektime()
       geektime.addListener("newlesson", (res) => {
         if(res.price < 80>) {
           console.log('buy',res)
         }
       })
     ```

     - 非阻塞I-O
       - 输入和输出
       - 阻塞*和非阻塞*的区别就在于系统接收输入再到输出期间，能不能接收其他输入
     - 异步编程callback
       - 回调函数格式规范
         - error-first callback
         - Node-style callback
       - 第一个参数是error，后面的参数才是结果
       - 异步流程控制
     - 事件循环
       - 
     - promise
     - RPC
       - remote procedure call 远程过程调用
       - tcp通信方式
         - 单工通信
         - 半双工通信
         - 全双工通信
     - Buffer 
       - 处理tcp流
       - Buffer.from

       - Buffer.alloc
     - 压力测试
       - ab
       - 找到性能瓶颈所在
       - top
       - iostat
     - node性能测试
       - profile node -prof entry
       - Chrome devtool 
         - node --inspect-brk entry.js
       - clinic.js
       - cluster 
         - cluster.fork()不要开这么满
