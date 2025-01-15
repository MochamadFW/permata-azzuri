const bookingService = require('../services/BookingService');

async function createBookingPatient(req, res, next) {
    const body = req.body;
    try {
        const booking = await bookingService.createBooking(body);

        return res.status(201).json({
            status: true,
            message: "Successfully created new booking for patient",
            data: booking
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    createBookingPatient
}