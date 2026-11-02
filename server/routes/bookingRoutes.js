const express = require("express");
const router = express.Router();

const {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

// Create Booking
router.post("/", protect, createBooking);

// Get All Bookings
router.get("/", protect, getBookings);

// Get Single Booking
router.get("/:id", protect, getBookingById);

// Update Booking
router.put("/:id", protect, updateBooking);

// Delete Booking
router.delete("/:id", protect, deleteBooking);

module.exports = router;