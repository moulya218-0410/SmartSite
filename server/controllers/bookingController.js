const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
    try {

        const booking = await Booking.create(req.body);

        res.status(201).json({
            message: "Booking Created Successfully",
            booking
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Bookings
exports.getBookings = async (req, res) => {
    try {

        const bookings = await Booking.find()
            .populate("user")
            .populate("project");

        res.status(200).json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get Single Booking
exports.getBookingById = async (req, res) => {
    try {

        const booking = await Booking.findById(req.params.id)
            .populate("user")
            .populate("project");

        if (!booking) {
            return res.status(404).json({
                message: "Booking Not Found"
            });
        }

        res.status(200).json(booking);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Update Booking Status
exports.updateBooking = async (req, res) => {
    try {

        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Booking Updated Successfully",
            booking
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete Booking
exports.deleteBooking = async (req, res) => {
    try {

        await Booking.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Booking Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};