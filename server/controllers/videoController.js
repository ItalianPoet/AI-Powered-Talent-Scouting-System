const Video = require("../models/Video");

exports.uploadVideo = async (req, res) => {
  try {
    const newVideo = new Video({ filename: req.file.filename });
    await newVideo.save();
    res.json({ message: "Video uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error uploading video" });
  }
};
