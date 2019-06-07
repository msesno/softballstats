const mongoose = require("mongoose");
const db = require("../models");


// This file empties the players collection and inserts the players below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/softballList"
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

const gameSeed = [
  {
    teams: "Redbuds v Bombers",
    score: "27-4",
    when: "4.24.2019",
    notes:
      "Bombers hit hard line drives, but the Redbuds prevailed. Dustin got hit in the shin with a return to pitcher but he recovered well and finished the game stronger than ever.",
    date: new Date(Date.now())
  },
  {
    teams: "Team Awesome v Black Birds",
    score: "39-6",
    when: "5.2.2019",
    notes:
      "Team Awesome started out strong but then quickly lost the lead 1-5. Then they startes drinking and hit only home runs for the rest of the game. It was either home run or strike out for this dreary sunday afternoon.",
    date: new Date(Date.now())
  },
  {
    teams: "Redbuds v Scumbags",
    score: "12-15",
    when: "3.28.2019",
    notes:
      "Matchup of egos was like clash of the titans times one million. As shortstop hated being called short he quickly realized that the main difference was in the short hops. The tall ones went over his head and that was the difference in defense.",
    date: new Date(Date.now())
  },
  {
    teams: "Team Awesome v Redbuds",
    score: "47-2",
    when: "2.15.2019",
    notes:
      "Absolute matchup of the century, TA has never lost since th addition of the 'Quad King' and he will never live down the reputation after this head to head battle of the wills",
    date: new Date(Date.now())
  }
];

  const teamSeed = [
    {
      name: "Redbuds",
      league: "PSL",
      players: "John Jim Bill",
      about:
        "Deemed the 'bad news bears' by local media, they show up ethnically balanced and a mental state of equilibrium that cannot be broken. Rolling now, opponents always get very upset when they lose to the well oiled machinie that they are today.",
      date: new Date(Date.now())
    },
    {
      name: "Team Awesome",
      league: "ASL",
      players: "John Jim Bill",
      about:
        "Architect league softball is weird by itself because there are no umps, or pitch counts. Each team calls it's own foul/fair, and the beer league mentalty is in full effect here. They love to have a good time, Awesome is always... but the score doesn't alway necessarily reflect so.",
      date: new Date(Date.now())
    },
    {
      name: "S. Philly Scumbags",
      league: "PSL",
      players: "John Jim Bill",
      about:
        "Full of Italian last names and olive skin, this team is set for success, yet always has one inning of self destruction. While the t-shirts may have been the most raunchy on the field, many people say they are nicer than they look.",
      date: new Date(Date.now())
    },
    {
      name: "Redbuds",
      league: "Alex Lemonade Charity Tourny",
      players: "John Jim Bill",
      about:
        "Full of respect, this team disrespects on the field without words. Many people fear this team, and they should because they are undefeated annually since joining this charity league in 2015.",
      date: new Date(Date.now())
    }
  ];
  
  db.team
    .remove({})
    .then(() => db.team.collection.insertMany(teamSeed))
    .then(data => {
      console.log(data.result.n + " team records inserted!");
      // process.exit(0);
    })
    .catch(err => {
      console.error(err);
      // process.exit(1);
    });

db.player
  .remove({})
  .then(() => db.player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " player records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });

db.game
  .remove({})
  .then(() => db.game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + " game records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



