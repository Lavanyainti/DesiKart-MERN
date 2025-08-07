const express = require('express');
const route = express.Router();
const middleware = require('../Middleware/middleware');
const multer = require('multer');
const { storage } = require('../utils/cloudinary'); // use cloud storage
const { addProfile, getProfile } = require('../controller/profileController');

const upload = multer({ storage });

route.post('/addProfile', middleware, upload.single('profileImage'), addProfile);
route.get('/getProfile', middleware, getProfile);

module.exports = route;
