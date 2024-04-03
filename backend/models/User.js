const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  playlists: [{ type: mongoose.Types.ObjectId, ref: "Playlist" }],
});

module.exports = mongoose.model("User", userModel);
