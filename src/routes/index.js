const express = require('express')
const doctorRoute = require('./doctor');
const bookingRoute = require('./booking');
const scheduleRoute = require('./schedule');

const router = express.Router();

router.use('/doctor', doctorRoute);
router.use('/booking', bookingRoute);
router.use('/schedule', scheduleRoute);

module.exports=router