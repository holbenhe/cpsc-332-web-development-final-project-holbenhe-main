const Reviewdb = require('../model/model');
var reviewdb = require('../model/model');

// create and save new textbook
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return
    }

    const review = new reviewdb({
        textbook:req.body.textbook,
        place:req.body.place,
        placereview:req.body.placereview,
        textbookreview:req.body.textbookreview
    })

    //save textbook in the database
    review
        .save(review)
        .then(data => {
            //res.send(data)
            res.redirect('/add-textbook')
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "Some error occured while creating a create operation"
            });
        });
}

//retrieve and return all textbooks / retrieve and return a single textbook
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;

        Reviewdb.findById(id)
        .then(data => {
            if(!data){
            res.status(404).send({message: "Not found user wih id: " + id})
        }else{
            res.send(data)
        }
        })
        .catch(err => {
            res.status(500).send({message: "Error retrieving user with ID: " + id})
        })
    } else {
        Reviewdb.find()
    .then(review=>{
        res.send(review)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error Occured while retriving review informaiton"})
    })
    }
    }

//updatea new idenfitied textxbook by textbook
exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }

    const id=req.params.id;
    Reviewdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
        res.status(404).send({message: 'Cannot Update user with ' + id + '. Maybe user not found!'})
    }else{
        res.send(data)
    }
    }) 
    .catch(err => {
        res.status(500).send({message: "Error Update user information"})
    })
}

//Delete a textbook with specified textbook
exports.delete = (req,res)=>{
    const id = req.params.id;

    Reviewdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: 'Cannot Delete with id ' + id + '.Maybe ID is wrong'})
        }else{
            res.send({
                message: "User was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message:"Could not delete User with id = " + id
        });
    });
}