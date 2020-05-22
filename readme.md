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
     - 异步编程callback
     - 事件循环
     - promise