const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload.js');

const SessionController = require('./controllers/SessionController.js');
const SpotController = require('./controllers/SpotController.js');
const DashboardController = require('./controllers/DashboardController.js');
const BookingController = require("./controllers/BookingController.js");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spot',upload.single('thumbnail'), SpotController.store);
routes.get('/spot', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;