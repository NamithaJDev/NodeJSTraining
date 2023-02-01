var http = require("http");//core inbuilt module
var fs = require("fs");//core inbuilt module
var path = require("path");//core inbuilt module
var url=require("url");//core inbuilt module
var qs=require("querystring");//core inbuilt module
const port = 3000;

var server = http.createServer((request, response) => {
    // handle specific methods and specific requests for different urls
    // request -- read stream
    // response -- write stream
    console.log("Request object method", request.method);
    console.log("Request object url", request.url);
    var urlObject=url.parse(request.url);
    console.log("Url Object",urlObject);
    if(request.method == "POST")
    {
        if(urlObject.pathname == "/products")
        {
            //break down the query string present as part urlObject.query
            var qsObject=qs.parse(urlObject.query);
            console.log("Querystring object ",qsObject);
            // iterate through the various fields of an object
            var fieldNameArr=Object.keys(qsObject);
            for(item of Object.keys(qsObject)  )
            {
                console.log(` ${item} : ${qsObject[item]}` );
            }
            response.end(JSON.stringify(qsObject));
            return;
        }
        //send data to server ; insert new data in the db
        // data --1. body of request(confidential ) 2. query string(can be exposed to user) 
        if(request.url == "/login")
        {
            // data coming as part of body of request
            // username and password
            // streams read from the request stream
            var dataRead="";
            request.on("data",(chunks)=>{
                dataRead+=chunks;
            })
            request.on("end",()=>{
                var dataReadInJson=JSON.parse(dataRead);
                console.log("Data received from client",dataReadInJson);
                response.end(dataRead);
            })
            return;

        }

    }
    if (request.method == "GET") {
        if (request.url == "/images") {
            // response an image;
            var imgPath = path.join(__dirname, "public", "flower.jpg");
            var readStreamRef = fs.createReadStream(imgPath);
            readStreamRef.pipe(response);
            // Windows Os= "C:\Users\anjum\OneDrive\Desktop\Dxc\day5"
            // MacOS = "C:/Users/anjum/OneDrive/Desktop/Dxc/day5"
            return;

        }
        if (request.url == "/employee") {
            var emp = { empId: 101, empName: "sara" };
            response.end(JSON.stringify(emp));
            return;
        }
        if (request.url == "/employees") {
            //array of emp
            var empArr = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
            { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
            { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
            { empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
            { empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
            { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
            { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]
            response.end(JSON.stringify(empArr));
            return;
        }
        if(request.url =="/product")
        {
            var product = { productId: 101, productName: "apple" };
            response.end(JSON.stringify(product));
            return;
        }
        if (request.url == "/") {
            response.write("This is the first chunk of response");
            response.write("This is the second chunk of response");
            response.end("tHis is the last chunk of response");
            return;
        }
        if (request.url == "/login") {
            // send login.html as response
            //readFileSync -- no
            // read -- No -- partial read of file
            //readFile
            /* fs.readFile("login.html",(err,contentOfFile)=>{
                if(err)
                {
                    response.setHeader('Content-type',"text/plain");
                    response.statusCode=500;
                    response.end("Error reading the file");
                }
                else
                {
                    response.end(contentOfFile);
                }
            }) */
            // createReadStream
            var readStreamRef = fs.createReadStream("login.html");
            /* readStreamRef.on("data",(chunk)=>{
                response.write(chunk);
            })
            readStreamRef.on("end",(chunk)=>{
                response.end(chunk);
            })
            readStreamRef.on("error",(err)=>{
                    response.setHeader('Content-type',"text/plain");
                    response.statusCode=500;
                    response.end("Error reading the file");
            }) */
            readStreamRef.pipe(response);

            return;
        }

    }
    response.end("Request received successfully from client and response sent successfully");

});

server.listen(port, () => {
    console.log(`Server is running at localhost with port number : ${port}`)
})
