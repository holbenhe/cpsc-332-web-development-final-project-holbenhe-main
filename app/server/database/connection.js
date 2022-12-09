const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {
    
        })

        console.log('MongoDB connected: ' + con.connection.host);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const bodyParser = require("body-parser");
// const ejs = require('ejs');

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.static("public"));

// const connectDB = async()=>{
//     try {
//         mongoose.connect("mongodb+srv://holbenhe:123@cluster0.d2c3wef.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true}, {useUnifiedTopology: true });
//     }catch(err){
//        console.log(err);
//         process.exit(1);
//         }
//     }

// module.exports = connectDB