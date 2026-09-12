const express = require("express");

console.log("Project Routes Loaded");

const router = express.Router();

const {
    addProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
} = require("../controllers/projectController");

const { protect } = require("../middleware/authMiddleware");

// Add Project
router.post("/", protect, addProject);

// Get All Projects
router.get("/", getProjects);

// Test Route
router.get("/test", (req, res) => {
    res.send("Project Route Working");
});

// Get Single Project
router.get("/:id", getProjectById);

// Update Project
router.put("/:id", protect, updateProject);

// Delete Project
router.delete("/:id", protect, deleteProject);

module.exports = router;
