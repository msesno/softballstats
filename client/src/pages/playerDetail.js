import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    player: {}
  };
  // When this component mounts, grab the player with the _id of this.props.match.params.id
  // e.g. localhost:3000/players/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getplayer(this.props.match.params.id)
      .then(res => this.setState({ player: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h2>
                {this.state.player.name}
              </h2>
              <h5><code>Position: {this.state.player.position}</code></h5>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2>About</h2>
              <h5>{this.state.player.name} ({this.state.player.position})</h5><hr></hr>
              <small><p>Position: {this.state.player.position} </p></small>
              <p>
                {this.state.player.about}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/players">← Back to Players</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
