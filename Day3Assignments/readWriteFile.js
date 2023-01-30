const fs=require("fs")
var fileContents = ""
fs.readFile("file1.txt", function(err,data) {
    if (err) {
        console.log("Read file 1:", err)
    } else {
        fileContents += data.toString()
        fs.writeFile("file4.txt",fileContents, function(err){
            if (err) {
                console.log("File 4 write error", err)
            } else {
                console.log("File 1 contents written successfully")
            }
        })
    }
})
fs.readFile("file2.txt", function(err,data) {
    if (err) {
        console.log("Read file 2:", err)
    } else {
        fileContents += data.toString()
        fs.writeFile("file4.txt",fileContents, function(err){
            if (err) {
                console.log("File 4 write error", err)
            } else {
                console.log("File 2 contents written successfully")
            }
        })
    }
})
fs.readFile("file3.txt", function(err,data) {
    if (err) {
        console.log("Read file 3:", err)
    } else {
        fileContents += data.toString()
        fs.writeFile("file4.txt",fileContents, function(err){
            if (err) {
                console.log("File 4 write error", err)
            } else {
                console.log("File 3 contents written successfully")
            }
        })
    }
})