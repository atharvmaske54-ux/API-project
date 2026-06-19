const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    date: {
        type: String, // Expected format: "YYYY-MM-DD"
        required: true
    },
    timeSlot: {
        type: String, // Expected format: "09:00 AM"
        required: true
    },
    // Add additional fields here if needed (e.g., patientName, doctorId)
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
