var http = require("http");//core inbuilt module
var fs = require("fs");//core inbuilt module
var path = require("path");//core inbuilt module
var url=require("url");//core inbuilt module
var qs=require("querystring");//core inbuilt module
const portNumber = 3000
var posts = ""
var server = http.createServer((request, response)=> {
    response.end("server started")
    if (request.method == "POST") {
        request.on("data",(chunks)=> {
            posts+=chunks
        })
        request.on("end",(chunks)=> {
            var newPosts = JSON.parse(posts)
        })
    }
})
server.listen(portNumber, () => {
    console.log(`Server is running at localhost with port number : ${portNumber}`)
})