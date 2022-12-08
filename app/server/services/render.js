
exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_textbook = (req,res) => {
    res.render('add_textbook');
}

exports.update_textbook = (req,res) =>{
    res.render('update_textbook');
}