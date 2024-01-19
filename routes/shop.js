

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
module.exports = router;


const productsController=require('../controllers/products')
router.get('/',productsController.getProduct)


