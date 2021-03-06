import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class teams extends Component {
  state = {
    teams: [],
    name: "",
    league: "",
    players: "",
    about: ""
  };

  componentDidMount() {
    this.loadteams();
    // this.loadplayers();
  }

  loadteams = () => {
    API.getteams()
      .then(res =>
        this.setState({ teams: res.data, name: "", league: "", players: "", about: "" })
      )
      .catch(err => console.log(err));
  };

  // loadplayers = () => {
  //   API.getplayers()
  //     .then(res =>
  //       this.setState({ players: res.data, name: "", })
  //     )
  //     .catch(err => console.log(err));
  // };


  deleteteam = id => {
    API.deleteteam(id)
      .then(res => this.loadteams())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.league && this.state.players) {
      API.saveteam({
        name: this.state.name,
        league: this.state.league,
        players: this.state.players,
        about: this.state.about
      })
        .then(res => this.loadteams())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1><i class="fas fa-user-friends"></i> <strong>Add Team</strong></h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="team name*"
              />
              <Input
                value={this.state.league}
                onChange={this.handleInputChange}
                name="league"
                placeholder="league name*"
              />
              <Input
                value={this.state.players}
                onChange={this.handleInputChange}
                name="players"
                placeholder="players"
              />
              {/* <div className="btn-block">
                <p>Roster:</p>
              <p><select className="basic-multi-select" classNamePrefix="select">
                {this.state.players.map((players) => <option> {players.name} </option>)}
              </select>
              <select>
                {this.state.players.map((players) => <option> {players.name} </option>)}
              </select>
              <select>
                {this.state.players.map((players) => <option> {players.name} </option>)}
              </select></p>
              </div> */}
              <TextArea
                value={this.state.about}
                onChange={this.handleInputChange}
                name="about"
                placeholder="about team"
              />
              <FormBtn
                disabled={!(this.state.league && this.state.name && this.state.players)}
                onClick={this.handleFormSubmit}
              >
                <i class="fas fa-check-square"></i> Submit Team
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1><i class="fas fa-users"></i> <strong>Team List</strong></h1>
            </Jumbotron>
            {this.state.teams.length ? (
              <List>
                {this.state.teams.map(team => (
                  <ListItem key={team._id}>
                    <Link to={"/teams/" + team._id}>
                      <strong>
                      <i class="fas fa-users"></i> {team.name}: {team.league}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteteam(team._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default teams;