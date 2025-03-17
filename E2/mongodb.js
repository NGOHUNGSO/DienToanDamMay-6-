const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
        console.log(err);
        process.exit(0);
    }
    console.log("database connected!");
    var dbo = db.db("test");
    dbo.createCollection("customers", (err, result) => {
        if (err) {
            console.log(err);
            process.exit(0);
        }
        console.log("collection created!");
        db.close();
    });
    dbo.collection("user").insert(data, (err, result) => {
        if (err) {
        console.log(err);
        process.exit(0);
        }
        console.log("records added.");
        console.log(result);
        db.close();
        });
    dbo.collection("user").findOne({}, (err, result) => {
        if (err) {
        console.log(err);
        process.exit(0);
        }
        console.log("Here is the record");
        console.log(result);
        db.close();
        });

});