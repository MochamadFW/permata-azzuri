const Schedule = require('../models/Schedule');

async function createNewSchedule(data) {
    try {
        const schedule = await Schedule.create(data);
        return schedule;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getScheduleByDoctor(doctor_id) {
    try {
        const schedules = await Schedule.findAll({
            where: {
                doctor_id: doctor_id
            }
        });
        return schedules;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createNewSchedule,
    getScheduleByDoctor
}