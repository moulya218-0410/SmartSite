const express = require("express");

const router = express.Router();
const upload = require("../middleware/upload");
const { protect } = require("../middleware/authMiddleware");

const {
    addProperty,
    getProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
} = require("../controllers/propertyController");

router.post("/", protect, upload.single("image"), addProperty);

router.get("/", getProperties);

router.get("/:id", getPropertyById);

router.put("/:id", protect, updateProperty);

router.delete("/:id", protect, deleteProperty);
module.exports = router;