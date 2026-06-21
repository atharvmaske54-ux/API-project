const express = require('express');
const router = express.Router();
const createAppointment = require('../controller/createAppointment');
const getAllAppointments = require('../controller/getAllAppointments');
const getAppointmentById = require('../controller/getAppointmentById');
const updateAppointmentStatus = require('../controller/updateAppointmentStatus');
const deleteAppointment = require('../controller/deleteAppointment');
const rescheduleAppointment = require('../controller/rescheduleAppointment');
const getAvailableSlots = require('../controller/getAvailableSlots');
const getQueueStatus = require('../controller/getQueueStatus');
const getTodaysAppointments = require('../controller/getTodaysAppointments');
const getUserAppointments = require('../controller/getUserAppointments');
const markCurrentServing = require('../controller/markCurrentServing');
const autoSlotValidation = require('../controller/autoSlotValidation');
const { protect } = require('../middleware/authMiddleware');

router.post('/create', protect, createAppointment);
router.get('/all', protect, getAllAppointments);
router.get('/slots', protect, getAvailableSlots);
router.get('/queue', protect, getQueueStatus);
router.get('/today', protect, getTodaysAppointments);
router.post('/validate', protect, autoSlotValidation);

// Params routes at bottom
router.put('/status/:id', protect, updateAppointmentStatus);
router.delete('/delete/:id', protect, deleteAppointment);
router.put('/reschedule/:id', protect, rescheduleAppointment);
router.get('/user/:phoneNumber', protect, getUserAppointments);
router.put('/serving/:id', protect, markCurrentServing);
router.get('/:id', protect, getAppointmentById);

module.exports = router;