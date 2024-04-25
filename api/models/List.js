const mongoose = require("mongooose");

const ListSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array }
}, {});


module.exports = mongoose.model("Movie", MovieSchema);