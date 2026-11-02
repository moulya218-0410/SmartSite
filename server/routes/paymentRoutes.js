const express = require("express");
const router = express.Router();

const {
    createPayment,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

// Create Payment
router.post("/", protect, createPayment);

// Get All Payments
router.get("/", protect, getPayments);

// Get Single Payment
router.get("/:id", protect, getPaymentById);

// Update Payment
router.put("/:id", protect, updatePayment);

// Delete Payment
router.delete("/:id", protect, deletePayment);

module.exports = router;