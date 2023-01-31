
var fs=require("fs");
var myBuffer=Buffer.alloc(1000);
var myWriteBuffer=Buffer.alloc(1000);
fs.open("file1.txt","r",(err,fd)=>{
    if(err)
    {
        console.log("Error opening the file");
    }
    else
    {
        // read 200 bytes from the 400th byte of the file
        // store in the buffer from the 100th position
        fs.read(fd,myBuffer,100,200,400,(err,bytesRead)=>{
            if(err)
            {
                console.log("Error reading the file");
            }
            else
            {
                console.log("Number of bytes read",bytesRead)
                console.log(myBuffer);
                fs.open("text4.txt","w",(err,wrFileDesc)=>{
                    if(err)
                    {
                        console.log("Error opening text4.txt");
                    }
                    else
                    {
                        myWriteBuffer.fill("Today is a beautiful day");
                        console.log(myWriteBuffer.toString())
                        //3rd param -- in the buffer -- starting position
                        // 4th param -- length of bytes to be written
                        // 5th param -- in the file where should it be written
                        fs.write(wrFileDesc,myBuffer,5,100,400,(err)=>{
                            if(err)
                            {
                                console.log("error in writing to text4",err)
                            }
                            else
                            {
                                console.log("Written successfully");
                            }
                        })
                    }
                })
               

            }
        })
    }
})