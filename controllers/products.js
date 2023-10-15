let product = require('../models/products');

//to add new product 
module.exports.add = async function(req, res,next){
    
    try {
        let newProduct = new product(req.body);//takes the http request's body as argument to create new product object
    let result = await product.create(newProduct);
    console.log(result);
    //sends json response to client
    res.json(
        {
            success: true,
            message: "Product added successfully."
        }
    );

        
    } catch (error) {
        //if while creating new product error is encountered
        res.send(error);
        next(error);
    }

}



module.exports.list = async function(req, res,next){
    
    try {
        let list = await product.find({}, '-password');

        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.productByID = async function (req, res, next) {
    console.log("here in productByID")
    try {
        let id = req.params.productID;
        console.log(id);
        req.product = await product.findOne({ _id: id }, '-password');
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports.read = async function (req, res, next) {
    res.json(req.product);
}