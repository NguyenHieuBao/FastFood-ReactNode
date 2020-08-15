const postsModel = require('../../models/posts');

module.exports.getListHotPosts = async (req, res) => {
    const getMax = 6;
    const listHotPosts = await postsModel.find({}).sort({DateCreated : 1}).limit(getMax).select(
        {
            Id : 1,
            Title : 1,
            DateCreated : 1,
            Description : 1,
            Image : 1
        }
    );
    res.json(listHotPosts);
}