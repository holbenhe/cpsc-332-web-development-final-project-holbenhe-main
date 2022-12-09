const axios = require('axios');


exports.homeRoutes = (req, res) => {
    //make a get request to the /api/users
    axios.get('http://localhost:3000/api/textbooks')
        .then(function(response){
            res.render('index', {textbooks:response.data});
        })

        .catch(err => {
            res.send(err);
        })
}

exports.add_textbook = (req,res) => {
    res.render('add_textbook');
}

exports.update_textbook = (req,res) =>{
    axios.get('http://localhost:3000/api/textbooks', {params: {id: req.query.id}})
    .then(function(textbookdata){
        res.render("update_textbook",{textbook : textbookdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}