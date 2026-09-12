const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
{
    projectName: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    totalPlots: {
        type: Number,
        required: true
    },

    availablePlots: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Project", projectSchema);