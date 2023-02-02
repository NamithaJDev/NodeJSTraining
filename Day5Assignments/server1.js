var http = require("http");//core inbuilt module
var fs = require("fs");//core inbuilt module
var path = require("path");//core inbuilt module
var url=require("url");//core inbuilt module
var qs=require("querystring");//core inbuilt module
const portNumber = 3000
var body=""

var empArr = [
    { empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
    { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
    { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
    { empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
    { empId: 105, empName: "Keshav", salary: 6000, deptId: "D2" },
    { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
    { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]

var server = http.createServer((request, response)=> {
    response.end("server started")
    var urlObject=url.parse(request.url);
    if (request.method == "DELETE") {
        if (request.url == "/employees") {
            request.on('data', function (data) {
                body += data;
                response.end(JSON.stringify(body));
            });
    
            request.on('end', function () {
               console.log("Data read ", body)
               response.end(body)
            });
            return;
        }
        if (request.url == "/deleteEmployee") {
            var qsObject = qs.parse(urlObject.query);
            console.log("Querystring object ", qsObject);
            let key = Object.keys(qsObject)
            let deletedArray = empArr.filter((employee=>employee.empId == qsObject[key]))
            request.on('data', function (data) {
                body += data;
                response.end(JSON.stringify(deletedArray));
            });

            request.on('end', function () {
                console.log("Data read ", body)
                response.end(body)
            });
            return;
        }
    }
})
server.listen(portNumber, () => {
    console.log(`Server is running at localhost with port number : ${portNumber}`)
})
