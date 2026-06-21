const express = require('express');
const router = express.Router();
const { deleteAppointment } = require('./controller');
const { protect } = require('../middleware/authMiddleware');

router.delete('/:id', protect, deleteAppointment);

module.exports = router;
