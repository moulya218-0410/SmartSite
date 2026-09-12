const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },

    bookingDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "Pending"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Booking", bookingSchema);