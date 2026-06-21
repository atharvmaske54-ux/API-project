require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/createAppointment', require('./createAppointment/route'));
app.use('/api/getAllAppointments', require('./getAllAppointments/route'));
app.use('/api/getAppointmentById', require('./getAppointmentById/route'));
app.use('/api/updateAppointmentStatus', require('./updateAppointmentStatus/route'));
app.use('/api/deleteAppointment', require('./deleteAppointment/route'));
app.use('/api/rescheduleAppointment', require('./rescheduleAppointment/route'));
app.use('/api/getAvailableSlots', require('./getAvailableSlots/route'));
app.use('/api/getQueueStatus', require('./getQueueStatus/route'));
app.use('/api/getTodaysAppointments', require('./getTodaysAppointments/route'));
app.use('/api/getUserAppointments', require('./getUserAppointments/route'));
app.use('/api/markCurrentServing', require('./markCurrentServing/route'));
app.use('/api/autoSlotValidation', require('./autoSlotValidation/route'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
