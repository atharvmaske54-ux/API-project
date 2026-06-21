const Appointment = require('../models/Appointment');

const markCurrentServing = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ message: 'Not found' });
        await Appointment.updateMany({ date: appointment.date, currentServing: true }, { currentServing: false });
        appointment.currentServing = true;
        await appointment.save();
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = markCurrentServing;