var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Title: String,
    Description: String,
    DateCreated: String,
    Likes: [String],
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
    ],
    Authors : [String]
});

var posts = mongoose.model('Post', schema, 'Posts');

module.exports = posts;