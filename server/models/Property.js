const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
{
    projectName: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    area: {
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    amenities: [{
        type: String
    }],

    image: {
        type: String
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model(
    "Property",
    propertySchema
);