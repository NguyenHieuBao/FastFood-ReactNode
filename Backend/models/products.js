var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Name: String,
    Price: Number,
    Image: String,
    Description: String,
    Categories: [String],
    Sold: Number,
    Like: [String],
    Comments: [
        {
            Id: String,
            Name: String,
            Message: String,
            DateCreated: String,
            Like: [String],
            Reply: [
                {
                    Id: String,
                    Name: String,
                    Message: String,
                    DateCreated: String,
                    Like: [String]
                }
            ]
        }
        
    ]
});

var products = mongoose.model('Product', schema, 'Products');

module.exports = products;