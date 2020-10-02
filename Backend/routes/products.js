const express = require('express');
const router = express.Router();
const filterAndPaginationController = require('../controllers/products/filterAndPagination');
const hotProductsController = require('../controllers/products/hotProducts');
const searchAllController = require('../controllers/products/searchAll');

router.get('/products', filterAndPaginationController.getAll);
router.get('/hot-products', hotProductsController.getListHotProducts);
router.get('/search', searchAllController.searchAll);

module.exports = router;