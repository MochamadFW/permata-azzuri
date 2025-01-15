const express = require('express');

const scheduleController = require('../controllers/ScheduleController')

const router = express.Router();

router.post('/doctor', scheduleController.fetchDoctorSchedule);
router.post('/register', scheduleController.registerSchedule);

module.exports=router;