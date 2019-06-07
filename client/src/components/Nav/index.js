import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Softball Stats
      </a>
      <a className="navbar wht" href="/teams">
        teams
      </a>
      <a className="navbar wht" href="/players">
        players
      </a>
      <a className="navbar wht" href="/games">
        games
      </a>
    </nav>
  );
}

export default Nav;
