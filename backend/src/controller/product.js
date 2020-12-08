const Product = require('../models/product');
const multer = require('multer');   // File uploading
const shortid = require('shortid'); // Unique id for images
const slugify = require('slugify');
const product = require('../models/product');

exports.createProduct = (req,res) => {

    const { name,price,description,category,quantity} = req.body
    let productPictures=[];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img : file.filename }
        });
    }

    const product = new Product({
        name : name,
        slug : slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category
    });

    product.save(((error,data) => {
        if(error) return res.status(400).json({error});
        if(data){
            return res.status(200).json({data});
        }
    }));

}

exports.getProduct = (req,res) => {
    productId = req.params.id
    Product.findOne({_id : productId}).exec(function(err,product) {
        if(err) res.status(404).send({msg : "Product not found "})

        if(!product){
            res.status(404).send({msg : "Product not found "})
        }
        else{
            res.send(product)
        }
    });
    /*const product = CircularJSON.stringify(Product.findOne({_id : productId}))
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({msg : "Product not found "})
    }*/
}