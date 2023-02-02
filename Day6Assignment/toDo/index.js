const express=require("express");//module to be installed
const path=require("path");
const bodyParser=require("body-parser");//module to be installed

const morgan=require("morgan");//module to be installed
// logging of the requests -- morgan

const port = 3000;
const fs=require("fs");

var app=express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
//app.use(morgan("combined"));
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.all("/",(request,response)=>{
    response.send("Response from the server");
})


app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})
