const express = require('express');
const route = express.Router();
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const { addProduct, getProduct, getProductById, addRating } = require('../controller/ProductsController');

const upload = multer({ storage });

route.post('/addproduct', upload.single('thumbnailImage'), addProduct);
route.get('/getProduct', getProduct);
route.get('/getProductById/:id', getProductById);
route.put('/addRating/:id', addRating);

module.exports = route;
