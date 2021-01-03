const router = require("express").Router();
const Comment = require("../../models/Comment");

router.get("/:id", (req, res) => {
    Comment.findById(req.params.id)
        .then((comment) => res.json(comment))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
    const newComment = new Comment(req.body);

    newComment.save()
        .then(() => res.json("Comment added successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json("Comment updated successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json("Comment deleted successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;
