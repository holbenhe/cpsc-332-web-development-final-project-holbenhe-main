const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    textbook : {
        type:String,
        required: true
    },
    place : {
        type:String,
        required: true
    },
    placereview : {
        type:String,
        required: false
    },
    textbookreview : {
        type:String,
        required: false
    },
})

//const Userdb = mongoose.model('userdb',schema);
const Reviewdb = mongoose.model('reviewdb', schema);

module.exports = Reviewdb;
//module.exports = Userdb;