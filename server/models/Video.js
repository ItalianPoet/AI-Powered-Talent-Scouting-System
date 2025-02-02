const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  filename: String,
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Video", VideoSchema);
