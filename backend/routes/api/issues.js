const router = require("express").Router();
const Issue = require("../../models/Issue");

router.get("/", (req, res) => {
    Issue.find()
        .then((issues) => res.json(issues))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
    Issue.findById(req.params.id)
        .then((issue) => res.json(issue))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
    const newIssue = new Issue(req.body);

    newIssue.save()
        .then(() => res.json("Issue added successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
    Issue.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json("Issue updated successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
    Issue.findByIdAndDelete(req.params.id)
        .then(() => res.json("Issue deleted successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;
