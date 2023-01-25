console.log("Module 1")
console.log("Hello world")
exports.f1 = function addNumbers(...p)  {
 var result = p.reduce((n1,n2)=>{
    return n1+n2;
  })
  console.log("Result ", result)
}
exports.f2 = function incrementNumbersBy10(...p) {
    var result = p.map(n1=>n1*10)
    console.log("Incremented value", result)
}
// module.exports={
//     addNumbers: addNumbers,
//     incrementNumbers: incrementNumbersBy10
// }