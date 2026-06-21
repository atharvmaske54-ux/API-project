const Appointment = require('../models/Appointment');

const getUserAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ phoneNumber: req.params.phoneNumber });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getUserAppointments;