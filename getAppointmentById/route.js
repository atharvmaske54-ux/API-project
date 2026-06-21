const express = require('express');
const router = express.Router();
const { getAppointmentById } = require('./controller');
const { protect } = require('../middleware/authMiddleware');

router.get('/:id', protect, getAppointmentById);

module.exports = router;
