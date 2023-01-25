//const { incrementNumbers, addNumbers } = require("./module1")
const obj = require("./module1")
require("./module1")
console.log("Module 2")
// addNumbers(20,30,60)
// incrementNumbers(20,30,60)
obj.f1(2,5,7)
obj.f2(10,20,30)
require("./module1") //caching, wont print module 1 and hello world