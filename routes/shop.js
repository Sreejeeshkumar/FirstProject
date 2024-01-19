// const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
module.exports = router;

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });
const productsController=require('../controllers/products')
router.get('/',productsController.getProduct)

// module.exports = router;
