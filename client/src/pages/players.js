import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class players extends Component {
  state = {
    players: [],
    name: "",
    age: "",
    weight: "",
    atbats: "",
    hits: "",
    outs: "",
    position: "",
    about: ""
  };

  componentDidMount() {
    this.loadplayers();
  }

  loadplayers = () => {
    API.getplayers()
      .then(res =>
        this.setState({ players: res.data, name: "", age: "", weight: "", atbats: "", hits: "", outs: "", position: "", about: "" })
      )
      .catch(err => console.log(err));
  };

  deleteplayer = id => {
    API.deleteplayer(id)
      .then(res => this.loadplayers())
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
    if (this.state.name && this.state.position) {
      API.saveplayer({
        name: this.state.name,
        position: this.state.position,
        age: this.state.age,
        weight: this.state.weight,
        atbats: this.state.atbats,
        hits: this.state.hits,
        outs: this.state.outs,
        about: this.state.about
      })
        .then(res => this.loadplayers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1><i class="fas fa-user-plus"></i> <strong>Add Player</strong></h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name*"
              />
              <Input
                value={this.state.position}
                onChange={this.handleInputChange}
                name="position"
                placeholder="position*"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="age"
              />
              <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="weight"
              />
              <Input
                value={this.state.atbats}
                onChange={this.handleInputChange}
                name="atbats"
                placeholder="at-bats"
              />
              <Input
                value={this.state.hits}
                onChange={this.handleInputChange}
                name="hits"
                placeholder="hits"
              />
              <Input
                value={this.state.outs}
                onChange={this.handleInputChange}
                name="outs"
                placeholder="outs"
              />
              <TextArea
                value={this.state.about}
                onChange={this.handleInputChange}
                name="about"
                placeholder="about player"
              />
              <FormBtn
                disabled={!(this.state.position && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit player
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1><i class="fas fa-user-friends"></i> <strong>Players</strong></h1>
            </Jumbotron>
            {this.state.players.length ? (
              <List>
                {this.state.players.map(player => (
                  <ListItem key={player._id}>
                    <Link to={"/players/" + player._id}>
                      <strong>
                        {player.name}: {player.position}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteplayer(player._id)} />
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

export default players;
