const Booking = require("../models/Booking");

async function createBooking(data) {
    try {
        const booking = await Booking.create(data);
        return booking;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createBooking
}