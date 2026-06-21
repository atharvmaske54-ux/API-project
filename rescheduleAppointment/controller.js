const Appointment = require('./model');

const rescheduleAppointment = async (req, res) => {
    try {
        const { date, time } = req.body;
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, { date, time }, { new: true });
        if (!appointment) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { rescheduleAppointment };
