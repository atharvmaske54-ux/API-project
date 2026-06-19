const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const dns = require("dns");



dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
app.use(express.json());

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
    console.error("Missing MONGO_URL in .env");
    process.exit(1);
}

mongoose.connect(mongoUrl)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    });

// routes
const appointmentRoutes = require("./appointments/appointmentRoutes");

app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});