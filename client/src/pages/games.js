import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



class games extends Component {
  state = {
    games: [],
    teams: "",
    score: "",
    when: "",
    notes: ""
  };

  componentDidMount() {
    this.loadgames();
  }

  loadgames = () => {
    API.getgames()
      .then(res =>
        this.setState({ games: res.data, teams: "", score: "", when: "", notes: "" })
      )
      .catch(err => console.log(err));
  };

  deletegame = id => {
    API.deletegame(id)
      .then(res => this.loadgames())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { teams, value } = event.target;
    this.setState({
      [teams]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.teams && this.state.score && this.state.when) {
      API.savegame({
        teams: this.state.teams,
        score: this.state.score,
        when: this.state.when,
        notes: this.state.notes
      })
        .then(res => this.loadgames())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Game</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.teams}
                onChange={this.handleInputChange}
                teams="teams"
                placeholder="teams (required)"
              />
              <Input
                value={this.state.score}
                onChange={this.handleInputChange}
                teams="score"
                placeholder="score (required)"
              />
              <Input
                value={this.state.when}
                onChange={this.handleInputChange}
                teams="when"
                placeholder="when (required)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                teams="notes"
                placeholder="notes (optional)"
              />
              <FormBtn
                disabled={!(this.state.score && this.state.teams && this.state.when)}
                onClick={this.handleFormSubmit}
              >
                Submit Game
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Game List</h1>
            </Jumbotron>
            {this.state.games.length ? (
              <List>
                {this.state.games.map(game => (
                  <ListItem key={game._id}>
                    <Link to={"/games/" + game._id}>
                      <strong>
                        {game.teams}, {game.score}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletegame(game._id)} />
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

export default games;
