const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getAllBookings,
    getAllPayments,
    getAllDocuments,
    verifyDocument
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

// Admin APIs
router.get("/users", protect, getAllUsers);

router.get("/bookings", protect, getAllBookings);

router.get("/payments", protect, getAllPayments);

router.get("/documents", protect, getAllDocuments);

router.put("/documents/:id/verify", protect, verifyDocument);

module.exports = router;