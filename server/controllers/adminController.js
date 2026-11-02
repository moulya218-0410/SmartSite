const User = require("../models/user");
const Booking = require("../models/Booking");
const Payment = require("../models/Payment");
const Document = require("../models/Document");

// Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Bookings
exports.getAllBookings = async (req, res) => {
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

// Get All Payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find()
            .populate("user")
            .populate("booking");

        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Documents
exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find()
            .populate("user");

        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Verify Document
exports.verifyDocument = async (req, res) => {
    try {
        const document = await Document.findByIdAndUpdate(
            req.params.id,
            { status: "Verified" },
            { new: true }
        );

        res.status(200).json({
            message: "Document Verified Successfully",
            document
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};