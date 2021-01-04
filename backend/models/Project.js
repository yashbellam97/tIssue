const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    visibility: {
        type: String,
        default: "public",
        enum: ["public", "private"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    issues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue"
    }]
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
