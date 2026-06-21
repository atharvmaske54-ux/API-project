const Appointment = require('./model');

const updateAppointmentStatus = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!appointment) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { updateAppointmentStatus };
