const Appointment = require('../models/Appointment');

const getTodaysAppointments = async (req, res) => {
    try {
        const today = new Date().toISOString().split('T')[0];
        const appointments = await Appointment.find({ date: today });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getTodaysAppointments;