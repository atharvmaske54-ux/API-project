const Appointment = require('../models/Appointment');

const autoSlotValidation = async (req, res) => {
    try {
        const { date, time } = req.body;
        const exists = await Appointment.findOne({ date, time });
        if (exists) {
            res.status(400).json({ message: 'Slot taken' });
        } else {
            res.status(200).json({ message: 'Slot available' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = autoSlotValidation;