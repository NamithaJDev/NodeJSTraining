const express = require("express");//module to be installed
const path = require("path");
const bodyParser = require("body-parser");//module to be installed

//const morgan=require("morgan");//module to be installed
// logging of the requests -- morgan


const fs = require("fs");

const port = 3000;
var products = [
    { productId: 101, productName: "Milk", price: 20 },
    { productId: 102, productName: "Orange", price: 120 },
    { productId: 103, productName: "apple", price: 140 },
    { productId: 104, productName: "palak", price: 10 },
    { productId: 105, productName: "tomato", price: 30 }
]

var empArr = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
{ empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
{ empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
{ empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
{ empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
{ empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
{ empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]
//var wStream=fs.createWriteStream(path.join(__dirname,"log","serverLog.txt"),{flags:"a"});

var app = express();

app.use(bodyParser.json())

app.get('/products', function (request, response) {
    response.send(products);
})
app.post("/addProduct", (request, response) => {
    products.push(request.body);
    response.json(products)
})
app.put("/updateProduct", (request, response) => {
    var pos = products.findIndex(item => item.productId == request.body.productId)
    products[pos] = request.body;
    response.json(products)
})
app.delete("/deleteProduct", (request, response) => {
    var pos = products.findIndex(item => item.productId == request.body.productId)
    products.splice(pos, 1)
    response.json(products)
})

console.log("Express example");
app.listen(port, () => {
    console.log(`Server started at port : ${port}`);
})
