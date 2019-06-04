const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  about: { type: String },
  date: { type: Date, default: Date.now }
});

const player = mongoose.model("player", playerSchema);

module.exports = player;
