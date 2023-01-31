const fs=require("fs")

console.log("File Contents of sample_file:",
  fs.readFileSync("file1.txt", "utf8"));
 
// Copying sample_file.txt to a different name
fs.copyFile("file1.txt", "file1-copy.txt", (err) => {
  if (err) {
    console.log("Oops! An Error Occured:", err);
  }
  else {
    // Printing the current file name after executing the function
    console.log("File Contents of async_copied_file:",
      fs.readFileSync("file1-copy.txt", "utf8"));
  }
});