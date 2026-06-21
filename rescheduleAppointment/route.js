const express = require('express');
const router = express.Router();
const { rescheduleAppointment } = require('./controller');
const { protect } = require('../middleware/authMiddleware');

router.put('/:id', protect, rescheduleAppointment);

module.exports = router;
