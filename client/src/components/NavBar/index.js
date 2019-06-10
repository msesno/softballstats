import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto">softball stats</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/players">players</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/teams">teams</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/games">games</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}