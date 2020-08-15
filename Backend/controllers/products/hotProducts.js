const productsModel = require('../../models/products');

module.exports.getListHotProducts = async (req, res) => {
    const maxProducts = 6;
    const listHotProducts = await productsModel.find({}).sort({Sold : 'desc'}).limit(maxProducts).select(
        {
            Id : 1,
            Name : 1,
            Price : 1,
            Image : 1
        }
    );
    res.json(listHotProducts);
}