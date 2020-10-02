const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts/NewPosts');

router.get('/', postsController.getListHotPosts);

module.exports = router;