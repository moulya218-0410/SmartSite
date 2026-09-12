const Payment = require("../models/Payment");

// Create Payment
exports.createPayment = async (req, res) => {
    try {

        const payment = await Payment.create(req.body);

        res.status(201).json({
            message: "Payment Created Successfully",
            payment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Payments
exports.getPayments = async (req, res) => {
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

// Get Single Payment
exports.getPaymentById = async (req, res) => {
    try {

        const payment = await Payment.findById(req.params.id)
            .populate("user")
            .populate("booking");

        if (!payment) {
            return res.status(404).json({
                message: "Payment Not Found"
            });
        }

        res.status(200).json(payment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Update Payment
exports.updatePayment = async (req, res) => {
    try {

        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Payment Updated Successfully",
            payment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete Payment
exports.deletePayment = async (req, res) => {
    try {

        await Payment.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Payment Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};