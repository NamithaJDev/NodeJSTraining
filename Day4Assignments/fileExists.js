const fs = require('fs');
const file_fd = fs.open('example_file.txt', 'r');
  
function doesFileExist(pathToFile) {
    fs.fstat(file_fd, function(err, data) {
     if (err) {
        return false
     }  else {
        return data.isFile()
     } 
    })
}
let flag = doesFileExist("./sampleDir/file1.js")
if (!flag) {
    console.log("Not a valid file")
} else {
    console.log("Valid file")
}