import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import games from "./pages/games";
import players from "./pages/players";
import teams from "./pages/teams";
import playerDetail from "./pages/playerDetail";
import gameDetail from "./pages/gameDetail";
import teamDetail from "./pages/teamDetail";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={players} />
          <Route exact path="/players" component={players} />
          <Route exact path="/players/:id" component={playerDetail} />
          <Route exact path="/games" component={games} />
          <Route exact path="/games/:id" component={gameDetail} />
          <Route exact path="/teams" component={teams} />
          <Route exact path="/teams/:id" component={teamDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
