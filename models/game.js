const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  teams: { type: String, required: true },
  score: { type: String, required: true },
  when: { type: Date, required: true },
  notes: { type: String },
  date: { type: Date, default: Date.now }
});

const game = mongoose.model("game", gameSchema);

module.exports = game;
