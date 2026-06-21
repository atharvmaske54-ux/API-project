const express = require('express');
const router = express.Router();
const { getAllAppointments } = require('./controller');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAllAppointments);

module.exports = router;
