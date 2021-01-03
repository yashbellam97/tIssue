const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
