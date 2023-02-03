const fs = require("fs");

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";

const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {

    try {
        var client = await mongoClient.connect()

        // switch over to the db : dxcDb; if not present will create the db
        var dbName = client.db("dxcDb");
        // select the collection
        var collName = dbName.collection("emp");
        const insertDocArray = [
            { "empId": 110, "empName": "Sumana" },
            { "empId": 111, "empName": "Sagar" },
            { "empId": 112, "empName": "Akash" },
            { "empId": 113, "empName": "Pallavi" },
        ]
        var res = await collName.insertMany(insertDocArray)// promise is resolved then only res will be populated
        console.log("Response of insertOne", res);
        //console.log("Response of insertOne: Inserted Id:", res.insertedId);
        //console.log("Response of insertOne: Inserted Count:", res.insertedCount);
    }
    catch (err) {
        console.log("Error", err)
    }

}
run();

