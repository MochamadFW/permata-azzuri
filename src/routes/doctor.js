const express = require('express');

const doctorController = require('../controllers/DoctorController')

const router = express.Router();

router.post('/filter/jenis', doctorController.filteredDoctor);
router.post('/register', doctorController.registerDoctor);

module.exports=router;