const express = require('express');
const router = express.Router();
const filterAndPaginationController = require('../controllers/products/filterAndPagination');
const hotProductsController = require('../controllers/products/hotProducts');

router.get('/products', filterAndPaginationController.getAll);
router.get('/hot-products', hotProductsController.getListHotProducts);

module.exports = router;