var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/SLP');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var Product =require('D:/SLP-sample/Model/product');

app.post('/product', function(request, response){
    var product = new Product;
    product.title = request.body.title;
    product.price = request.body.price; 
    product.save(function(err, savedProduct){
        if(err)
            {
                response.status(500).send({error: "Product could not be saved!"});
            }
        else
            {
                response.send(savedProduct);
            }
    });
});

app.get('/product', function(request, response){
    Product.find({}, function(err, products){
        if(err)
            {
                response.status(500).send({error: "Could not fetch list!"});
            }
        else
            {
                response.send(products);
            }
    });
});

app.listen(3000, function(){
    console.log("Server running successfully!");
})