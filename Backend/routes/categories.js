const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/products/categories');

router.get('/', categoriesController.getAll);

module.exports = router;