const Appointment = require('../models/Appointment');

const getAvailableSlots = async (req, res) => {
    try {
        const { date } = req.query;
        const booked = await Appointment.find({ date }).select('time');
        const bookedTimes = booked.map(a => a.time);
        const allSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
        const available = allSlots.filter(s => !bookedTimes.includes(s));
        res.status(200).json({ available });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAvailableSlots;