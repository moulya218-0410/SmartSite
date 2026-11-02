const Document = require("../models/Document");

// Upload Document
exports.createDocument = async (req, res) => {
    try {

        const document = await Document.create(req.body);

        res.status(201).json({
            message: "Document Uploaded Successfully",
            document
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Documents
exports.getDocuments = async (req, res) => {
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

// Get Single Document
exports.getDocumentById = async (req, res) => {
    try {

        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document Not Found"
            });
        }

        res.status(200).json(document);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Update Document
exports.updateDocument = async (req, res) => {
    try {

        const document = await Document.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Document Updated Successfully",
            document
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete Document
exports.deleteDocument = async (req, res) => {
    try {

        await Document.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Document Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};