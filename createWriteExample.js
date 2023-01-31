var fs=require("fs");

var writeStreamRef=fs.createWriteStream("text6.txt",{highWaterMark:500});
// default chunk size -- 64kb
var resultOfFirstWrite=writeStreamRef.write("Nodejs is a server size language",(err)=>{
    if(err)
    {
        console.log("Error in the first write",err)
    }

});
// 1. write the chunk of data to the write stream

var resultOfSecondWrite=writeStreamRef.write("N");

writeStreamRef.end();//have finished writing to the stream, stream will be closed. Further writes will throw error

/* writeStreamRef.write("This is going to cause an error",(err)=>{
    // invoked only with respect to this particular write method
    if(err)
    {
        console.log("Error from callback",err)
    }
}) */

writeStreamRef.on("error",(err)=>{
    // invoked for all kinds of errors
    console.log("Error occurred",err)
})

console.log("First write return value ",resultOfFirstWrite);
console.log("Second write return value ",resultOfSecondWrite);