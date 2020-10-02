const productsModel = require('../../models/products');

module.exports.searchAll = async (req, res) => {

    const data = await productsModel.find({}).select(
        {
            Name : 1,
            _id : 0
        }
    );
    const listProductsFromSearch = data.map(item => item.Name)
    res.json(listProductsFromSearch);
}