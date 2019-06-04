import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import players from "./pages/players";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={players} />
          <Route exact path="/players" component={players} />
          <Route exact path="/players/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
