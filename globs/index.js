const glob = require('glob')
// 阻塞io
// let result = null
// result = glob.sync(__dirname+"/**/*")
// console.log(result)
// 非阻塞io
console.time()
glob(__dirname+"/**/*", function(e,r) {
    console.log(r)
})
console.timeEnd()
console.log(1+1)