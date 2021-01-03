const router = require("express").Router();
const User = require("../../models/User");

router.get("/", (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
    const newUser = new User(req.body);

    newUser.save()
        .then(() => res.json("User added successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json("User updated successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;