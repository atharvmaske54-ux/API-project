const Appointment = require('../models/Appointment');

const getQueueStatus = async (req, res) => {
    try {
        const { date } = req.query;
        const current = await Appointment.findOne({ date, currentServing: true });
        res.status(200).json({ current });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getQueueStatus;