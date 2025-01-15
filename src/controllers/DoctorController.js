const doctorService = require('../services/DoctorService');

async function registerDoctor(req, res, next) {
    const body = req.body;
    try {
        const doctor = await doctorService.createNewDoctor(body);
        
        return res.status(201).json({
            status: true,
            message: "Successfully register new doctor!",
            data: doctor
        });
    } catch (error) {
        return next(error);
    }
}

async function filteredDoctor(req, res, next) {
    const { jenis } = req.body;
    try {
        const filteredData = await doctorService.getDoctorByJenis(jenis);

        return res.status(200).json({
            status: true,
            message: "Successfully fetched doctor by filter jenis",
            data: filteredData
        })
    } catch (error) {
        return next(error);
    }
}

module.exports= {
    registerDoctor,
    filteredDoctor
}