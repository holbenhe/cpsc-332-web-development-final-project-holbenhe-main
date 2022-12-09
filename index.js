// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const bodyParser = require("body-parser");
// const ejs = require('ejs');
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const router = expresss.Router()
// const Schema = mongoose.Schema

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.static("public"));

// //used for our database connections
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/"; //part of the database connection string
// const DB_NAME = "testDB"; //database name
// const PORT = process.env.PORT || 8080; //port we want to listen to in our web server -- process.evn.PORT used for heroku, possibly alternatives?

// //added for UPDATE statemnt in our CRUD operation
// var ObjectId = require("mongodb").ObjectId; // for our EDIT

// //test
// //test 2

// //used for our database connection
// const client = new MongoClient(
//     url,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true 
//     }
    
// );

// //set up the client connection to our specified database
// client.connect(err => {
//     db = client.db(DB_NAME).collection("formResults");
// });

// app.use(express.urlencoded({
//     extended: true
// }));

// //we want to use embedded javascript "template" files
// app.set("view engine", "ejs");

// //start listening for requests on the specified port
// app.listen(PORT, function() {
//     console.log("Server listening on port " + PORT)
// });

// //root path
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.post("/create", (req, res) => {

// });

// var UserSchema = Schema({
//     username: {
//         type: String,
//         unique: true,
//         reuqired: true,
//         trim: true
//     },
//     password : {
//         type: String,
//         required: true,
//     }
// }, {timestamps: true})

// //hashing the password
// UserSchema.pre('save', function(next) {
//     var user = this;
//     bcrypt.hash(user.password, 10, function (err, hash) {
//         if (err) {
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     })
// });

// UserSchema.statics.authenticate = function (userData, req, res) {
//     UserCredentials.findOne({
//         username : userData.usernmae
//     })
//         .exec(function (err, user) {
//             if (err) {
//                 return res.render("error.ejs", {
//                     errors : 2
//                 });
//             } else if (!user){
//                 var err = new Error('User not found.');
//                 err.status = 401;
//                 //error
//                 return res.render("error.ejs", {
//                     errors: 2
//                 });
//             }
//             //if we get here, we did not hit an error...
//             bycrypt.compare(userData.password, user.password, function (err, result){
//                 if (result === true) {
//                     req.session.userId = user_id;
//                     return res.render("form.ejs")
//                 } else {
//                     return res.redirect("/login")
//                 }
//             })
//         });
// }

// //const UserCredentials = mongoose.model("UserCredential", UserSchema);
// const User = mongoose.model('User', UserSchema)
// module.exports = User

// const session = require('express-session');

// app.use(session({
//     secret: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//     resave: true,
//     saveUninitialized: false
// }));

// const VALID_AGREE_VALUES = ["Yes", "Maybe", "No"];

// app.get("/", function (req, res) {
//     return res.redirect("/login");
// });

// app.get("/form", (req, res) => {
//     if (req.session.userId) {
//         //authenticate
//         validateSession(req.session.userId, res);
//         res.render("form.ejs");
//     } else {
//         return res.redirect("/login");
//     }
// });

// app.post("/show", (req, res) => {

//     if (req.session.userId) {
//         validateSession(req.session.userId, res);

//         console.log("Form Data: ");
//         console.log(req.body);

//         let result = FormResult(
//             {
//                 first: req.body.first,
//                 last: req.body.last,
//                 rating: req.body.rating < 0 || req.body.rating > 4 ? - 1: req.body.rating,
//                 agree: VALID_AGREE_VALUES.includes(req.body.agree) ? req.body.agree : ""
//             }
//         )
//     }
// })

// const register = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, function(err,hashedPass) {
//         if(err) {
//             res.json({
//                 error: err
//             })
//         }
//     })

//     let user = new User({
//         username: req.body.username,
//         password: hashedPass
//     })
//     user.save()
//     .then(user => {
//         res.json({
//             message: 'User Added Successfuly!'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error occured!'
//         })
//     })
// }

// module.exports = {
//     register
// }

// router.post('/register', AuthController.register)

// module.exports = router


