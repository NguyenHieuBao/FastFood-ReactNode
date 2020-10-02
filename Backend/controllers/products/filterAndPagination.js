const productsModel = require('../../models/products');

module.exports.getAll = async (req, res) => {
    const perPage = 4, maxPrice = 1000000000;
    const validateUrl = /^[0-9]+$/i;

    let page = parseInt(req.query.page) || 1;
    let min = parseInt(req.query.min) || 0;
    let max = parseInt(req.query.max) || maxPrice;
    let categories = req.query.categories || '';
    let sortPrices = req.query.sortPrices;
    let keyword = req.query.keyword || '';
    
    min = (min < 0 || !validateUrl.test(min)) ? 0 : min;
    max = (max < 0 || !validateUrl.test(max)) ? maxPrice : max;
    sortPrices = (sortPrices === "pricesIncrease") && "asc" || (sortPrices === "pricesDecrease") && "desc" || '';

    const totalProducts = await productsModel.countDocuments(
        {
            Price : { $gte :  min, $lte : max},
            Categories : {$regex: categories, $options: 'i'},
            Name : {$regex: keyword, $options: 'i'}
        }
    );

    let totalPage = Math.ceil(totalProducts / perPage);

    page = (page > totalPage || page < 1) ? 1 : page;

    let startPage = (page - 1) * perPage;
    
    const products = await (productsModel.find(
        {
            Price : { $gte :  min, $lte : max},
            Categories : {$regex: categories, $options: 'i'},
            Name : {$regex: keyword, $options: 'i'}
        }
    ).skip(startPage)
    .limit(perPage))
    .sort(sortPrices !== '' ? { Price: sortPrices } : sortPrices)
    .select(
        {
            Id : 1,
            Name : 1,
            Price : 1,
            Image : 1
        }
    );

    res.json({products, totalPage, page});
}