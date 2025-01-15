const express = require('express');

const bookingController = require('../controllers/BookingController')

const router = express.Router();

router.post('/create', bookingController.createBookingPatient);

module.exports=router;