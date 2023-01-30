const fs=require("fs")
fs.readFile("file1.txt", function(err,data){
    console.log("File reading operation completed")
    if (err) {
        console.log("Error reading file ", err)
    } else {
        console.log("Successfully read the file with data ", data.toString())
        fs.writeFile("file2.txt", data,function(err,data){
            console.log("Write file operation completed")
            if(err) {
                console.log("Write error", err)
            } else {
                console.log("Write operation successful")
            }
            console.log("Write file operation completed")
        })
    }
})
