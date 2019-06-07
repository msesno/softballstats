const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  about: { type: String },
  date: { type: Date, default: Date.now }
});

const game = mongoose.model("game", gameSchema);

module.exports = game;
