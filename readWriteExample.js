// file which is of 20gb; read the contents, and write to another file

var fs=require("fs");

var readStreamRef=fs.createReadStream("text3.txt");
var writeStreamRef=fs.createWriteStream("text5.txt");

var chunkcounter=0;
readStreamRef.on("data",(chunks)=>{
    writeStreamRef.write(chunks,(err)=>{
        if(!err)
        {
            chunkcounter++;
        }
    });


})

readStreamRef.on("end",(chunks)=>{
    writeStreamRef.end(chunks,()=>{
            console.log("Total Number of Chunks written ",chunkcounter);
    });
})
console.log("Total Number of Chunks written ",chunkcounter);

/////PIPE
var fs=require("fs");

var readStreamRef=fs.createReadStream("text3.txt");
var writeStreamRef=fs.createWriteStream("text7.txt");

readStreamRef.pipe(writeStreamRef);
