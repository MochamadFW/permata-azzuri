const scheduleService = require('../services/ScheduleService');
const doctorService = require('../services/DoctorService');

async function registerSchedule(req, res, next) {
    const body = req.body;
    try {
        const schedule = await scheduleService.createNewSchedule(body);

        return res.status(201).json({
            status: true,
            message: "Successfully register new schedule",
            data: schedule
        });
    } catch (error) {
        return next(error);
    }
}

async function fetchDoctorSchedule(req, res, next) {
    const { doctor_id } = req.body;
    try {
        // Fetch doctor data
        const checkDoctor = await doctorService.getDoctorById(doctor_id);
        const namaDokter = checkDoctor.nama;
        // Fetch doctor schedule
        const scheduleDoctor = await scheduleService.getScheduleByDoctor(doctor_id);
        return res.status(200).json({
            status: true,
            message: "Successfully fetched schedule by specified doctor",
            data: {
                nama: namaDokter,
                jadwal: scheduleDoctor,
            }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    registerSchedule,
    fetchDoctorSchedule
}