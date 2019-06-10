import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import games from "./pages/games";
import players from "./pages/players";
import teams from "./pages/teams";
import playerDetail from "./pages/playerDetail";
import gameDetail from "./pages/gameDetail";
import teamDetail from "./pages/teamDetail";
import Footer2 from "./components/Footer2";
import Nav2 from "./components/Nav2";
import home from "./pages/home";



function App() {
  return (
    <Router>
      <div>
        <Nav2 />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/players" component={players} />
          <Route exact path="/players/:id" component={playerDetail} />
          <Route exact path="/games" component={games} />
          <Route exact path="/games/:id" component={gameDetail} />
          <Route exact path="/teams" component={teams} />
          <Route exact path="/teams/:id" component={teamDetail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer2 />
      </div>
    </Router>
  );
}

export default App;
