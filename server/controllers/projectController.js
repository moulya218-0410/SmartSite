const Project = require("../models/Project");

// Add Project
exports.addProject = async (req, res) => {
    try {

        const project = await Project.create(req.body);

        res.status(201).json({
            message: "Project Added Successfully",
            project
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Projects
exports.getProjects = async (req, res) => {
    try {

        const projects = await Project.find();

        res.status(200).json(projects);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get Single Project
exports.getProjectById = async (req, res) => {
    try {

        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                message: "Project Not Found"
            });
        }

        res.status(200).json(project);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Update Project
exports.updateProject = async (req, res) => {
    try {

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Project Updated Successfully",
            project
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete Project
exports.deleteProject = async (req, res) => {
    try {

        await Project.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Project Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};