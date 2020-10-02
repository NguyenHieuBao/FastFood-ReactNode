const productsModel = require('../../models/products');

module.exports.getAll = async (req, res) => {
    const all = "Tất cả";
    let categories = await productsModel.find({}).distinct( "Categories" );
    categories.unshift(all);

    res.json({categories});
}