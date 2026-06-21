const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    appointmentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
    serviceType: { type: String, required: true },
    doctorName: { type: String, required: true },
    status: { type: String, default: 'pending' },
    queueNumber: { type: Number },
    currentServing: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
