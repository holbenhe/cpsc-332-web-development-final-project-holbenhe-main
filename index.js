const express = require("express");
const app = express();

//used for our database connections
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/"; //part of the database connection string
const DB_NAME = "testDB"; //database name
const PORT = process.env.PORT || 8080; //port we want to listen to in our web server -- process.evn.PORT used for heroku, possibly alternatives?

//added for UPDATE statemnt in our CRUD operation
var ObjectId = require("mongodb").ObjectId; // for our EDIT

//test

//used for our database connection
const client = new MongoClient(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
    
);

//set up the client connection to our specified database
client.connect(err => {
    db = client.db(DB_NAME).collection("formResults");
});

app.use(express.urlencoded({
    extended: true
}));

//we want to use embedded javascript "template" files
app.set("view engine", "ejs");

//start listening for requests on the specified port
app.listen(PORT, function() {
    console.log("Server listening on port " + PORT)
});

//root path
app.get("/", (req, res) => {
    res.render("form.ejs");
});



