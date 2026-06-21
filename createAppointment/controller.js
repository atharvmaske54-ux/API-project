const Appointment = require('./model');

const createAppointment = async (req, res) => {
    try {
        const { name, phoneNumber, email, date, time, serviceType, doctorName } = req.body;
        const appointmentId = 'APT' + Date.now();
        const count = await Appointment.countDocuments({ date });
        const queueNumber = count + 1;
        const appointment = new Appointment({
            appointmentId, name, phoneNumber, email, date, time, serviceType, doctorName, queueNumber
        });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createAppointment };
