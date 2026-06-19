const Appointment = require("./appointmentModel");

// Define a fixed list of time slots (9:00 AM to 5:00 PM with 30-minute intervals)
const fixedTimeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM"
];

// Controller function to get available slots
const getAvailableSlots = async (req, res) => {
    try {
        // 1. The API should accept a date as a query parameter
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({ message: "Please provide a date as a query parameter (e.g., ?date=YYYY-MM-DD)." });
        }

        // 2. Fetch all existing appointments for the given date from the database
        const existingAppointments = await Appointment.find({ date });

        // Extract just the time slots that are already booked
        const bookedSlots = existingAppointments.map(appointment => appointment.timeSlot);

        // 3. Compare and filter out the already booked time slots
        const availableSlots = fixedTimeSlots.filter(slot => !bookedSlots.includes(slot));

        // 4. If no slots are available, return an empty array with a proper message
        if (availableSlots.length === 0) {
            return res.status(200).json({ 
                message: "No slots are available for the selected date.", 
                availableSlots: [] 
            });
        }

        // 5. Return only the available (free) time slots
        return res.status(200).json({ 
            message: "Available slots fetched successfully.",
            availableSlots 
        });

    } catch (error) {
        // Handle errors properly and return meaningful responses
        console.error("Error in getAvailableSlots:", error);
        return res.status(500).json({ 
            message: "An error occurred while fetching available slots.", 
            error: error.message 
        });
    }
};

module.exports = {
    getAvailableSlots
};
