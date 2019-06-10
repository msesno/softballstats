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
        this.setState({ players: res.data, name: "", atbats: "", hits: "", outs: "", position: "", about: "" })
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
              <h1>Add Player</h1>
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
                value={this.state.atbats}
                onChange={this.handleInputChange}
                name="atbats"
                placeholder="at-bats (can change later)"
              />
              <Input
                value={this.state.hits}
                onChange={this.handleInputChange}
                name="hits"
                placeholder="hits (can change later)"
              />
              <Input
                value={this.state.out}
                onChange={this.handleInputChange}
                name="outs"
                placeholder="outs (can change later)"
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
              <h1>Player List</h1>
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
