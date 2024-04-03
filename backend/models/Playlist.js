const mongoose = require("mongoose");

const playlistModel = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  audios: [{ type: mongoose.Types.ObjectId, ref: "Audio" }],
});

module.exports = mongoose.model("Playlist", playlistModel);
