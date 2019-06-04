const mongoose = require("mongoose");
const db = require("../models");

// This file empties the players collection and inserts the players below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/playerlist"
);

const playerSeed = [
  {
    name: "Matty Ice",
    position: "Right Center",
    about:
      "Top performer on base percentage. Pattented 'sesno slice' comes down the right field line every time. Most, RBI's and runs scored on team despite not tracking those stats.",
    date: new Date(Date.now())
  },
  {
    name: "Quad King",
    position: "3b/1b",
    about:
      "With the best looking quads on the planet... this man flattens unsuspecting 1st base runners on the regular. The stretch from first is something the fans have been clamoring for year. It's what they came to see.",
    date: new Date(Date.now())
  },
  {
    name: "Blazin Baldy",
    position: "Pitcher",
    about:
      "Throws over 100mph every pitch. Underhand. Mask more badass than tax bracket tier. Very good negotiator, will always win bidding war.",
    date: new Date(Date.now())
  },
  {
    name: "Old Man in a Can",
    position: "Left Center",
    about:
      "This man may be old, but he will show you the ways of wonder. Deemed 'don't hit it to me' for laziness, turns out other teams should recognize that for what it means.",
    date: new Date(Date.now())
  }
];

db.player
  .remove({})
  .then(() => db.player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
