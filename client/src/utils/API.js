import axios from "axios";

export default {
  // Gets all games
  getgames: function() {
    return axios.get("/api/games");
  },
  // Gets the game with the given id
  getgame: function(id) {
    return axios.get("/api/games/" + id);
  },
  // Deletes the game with the given id
  deletegame: function(id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  savegame: function(gameData) {
    return axios.post("/api/games", gameData);
  },
  // Gets all players
  getplayers: function() {
    return axios.get("/api/players");
  },
  // Gets the player with the given id
  getplayer: function(id) {
    return axios.get("/api/players/" + id);
  },
  // Deletes the player with the given id
  deleteplayer: function(id) {
    return axios.delete("/api/players/" + id);
  },
  // Saves a player to the database
  saveplayer: function(playerData) {
    return axios.post("/api/players", playerData);
  },
    // Gets all teams
  getteams: function() {
    return axios.get("/api/teams");
  },
  // Gets the team with the given id
  getteam: function(id) {
    return axios.get("/api/teams/" + id);
  },
  // Deletes the team with the given id
  deleteteam: function(id) {
    return axios.delete("/api/teams/" + id);
  },
  // Saves a team to the database
  saveteam: function(teamData) {
    return axios.post("/api/teams", teamData);
  }
};
