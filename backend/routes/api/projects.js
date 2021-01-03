const router = require("express").Router();
const Project = require("../../models/Project");

router.get("/", (req, res) => {
    Project.find()
        .then((projects) => res.json(projects))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
    Project.findById(req.params.id)
        .then((project) => res.json(project))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
    const newProject = new Project(req.body);

    newProject.save()
        .then(() => res.json("Project added successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json("Project updated successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json("Project deleted successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;
