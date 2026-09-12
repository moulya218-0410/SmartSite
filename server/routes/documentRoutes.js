const express = require("express");
const router = express.Router();

const {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument
} = require("../controllers/documentController");

const { protect } = require("../middleware/authMiddleware");

// Upload Document
router.post("/", protect, createDocument);

// Get All Documents
router.get("/", protect, getDocuments);

// Get Single Document
router.get("/:id", protect, getDocumentById);

// Update Document
router.put("/:id", protect, updateDocument);

// Delete Document
router.delete("/:id", protect, deleteDocument);

module.exports = router;