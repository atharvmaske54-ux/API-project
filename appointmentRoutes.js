const express = require("express");
const { getAvailableSlots } = require("./appointmentController");

const router = express.Router();

// Route to get available slots
router.get("/available-slots", getAvailableSlots);

module.exports = router;
