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
     