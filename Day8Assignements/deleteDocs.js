const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });


var entries =[{"empId":203, "empName":"Ram","salary":"10000"},
{"empId":204, "empName":"Wilson","salary":"15000"},
{"empId":205, "empName":"varun","salary":"50000"},
{"empId":999, "empName":"pavan","salary":"10000"},
{"empId":207, "empName":"Eswar","salary":"10000"},
{"empId":208, "empName":"mohan","salary":"80000"}]

async function run() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employees");
        //collName.insertMany(entries)
       // console.log(collName.find())
        // Delete employee for empId:203
        //  var filterObj={empId:203}
        // collName.deleteOne(filterObj)
        // .then((res)=>{
        //     //console.log(res);
        //     if(res.deletedCount==1)
        //     {
        //         console.log("Document Deleted successfully");
        //     } else {
                  //console.log("No document deleted");
            // }

        //     mongoClient.close();
        // })
        // .catch((err)=>{
        //     console.log("Error during Deletion ",err);
        //     mongoClient.close();
        // }) 
        //        Delete all docs where salary=10000

        //var updateOp={$set:{salary:1000}}
        var deleteObj = {salary:10000}
        collName.deleteMany(deleteObj)
        .then((res)=>{
            console.log(res);
            if(res.deletedCount >0)
            {
                console.log("Number of docs matched " + res.deletedCount)
            }
            if(res.deletedCount ==0)
            {
                console.log("No docs deleted")
            }
        })
        .catch((err)=>{
            console.log("Error during updation ",err);
            mongoClient.close();
        }) 
   }
    catch (err) {
        console.log("Error", err)
    }
}
run();
