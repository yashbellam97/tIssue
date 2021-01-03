const mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    priority: {
        type: String,
        default: "normal",
        enum: ["low", "normal", "high"]
    },
    status: {
        type: String,
        default: "open",
        enum: ["open", "closed"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, { timestamps: true });

module.exports = mongoose.model("Issue", issueSchema);
