const express = require('express');
const router = express.Router();
const { updateAppointmentStatus } = require('./controller');
const { protect } = require('../middleware/authMiddleware');

router.put('/:id', protect, updateAppointmentStatus);

module.exports = router;
