// const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsController=require('../controllers/products')

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });
router.get('/add-product',productsController.getAddProduct)

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });
router.post('/add-product',productsController.postAddProduct)

module.exports = router;
