const Property = require("../models/Property");

// Add Property
// Add Property
exports.addProperty = async (req, res) => {
    try {

        const propertyData = {
            ...req.body,
            image: req.file ? req.file.filename : null
        };

        const property = await Property.create(propertyData);

        res.status(201).json({
            message: "Property Added Successfully",
            property
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Properties
exports.getProperties = async (req, res) => {
    try {

        const properties = await Property.find();

        res.status(200).json(properties);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get Single Property
exports.getPropertyById = async (req, res) => {
    try {

        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                message: "Property Not Found"
            });
        }

        res.status(200).json(property);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Update Property
exports.updateProperty = async (req, res) => {
    try {

        const property = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Property Updated Successfully",
            property
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete Property
exports.deleteProperty = async (req, res) => {
    try {

        await Property.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Property Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};