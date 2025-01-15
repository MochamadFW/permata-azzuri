const Doctor = require("../models/Doctor");

async function createNewDoctor(data) {
    try {
        const doctor = await Doctor.create(data);
        return doctor;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getDoctorById(id) {
    try {
        const doctor = await Doctor.findOne({
            where:{
                id: id
            }
        });
        if (!doctor) {
            throw new Error("Specified doctor not found/does not exists!")
        }
        return doctor;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getDoctorByJenis(jenis) {
    try {
        const doctors = await Doctor.findAll({
            where: {
                jenis: jenis
            }
        });
        return doctors;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createNewDoctor,
    getDoctorById,
    getDoctorByJenis
}