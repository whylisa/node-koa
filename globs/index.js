const glob = require('glob')

let result = null
result = glob.sync(__dirname+"/**/*")
console.log(result)