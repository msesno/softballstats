import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


class Detail extends Component {
  state = {
    game: {}
  };
  // When this component mounts, grab the game with the _id of this.props.match.params.id
  // e.g. localhost:3000/games/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getgame(this.props.match.params.id)
      .then(res => this.setState({ game: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h2>
              {this.state.game.team1} v {this.state.game.team2}
              </h2>
              <strong><h5><code>Score: {this.state.game.score} </code></h5></strong>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col size="md-1"></Col>
          <Col size="md-10">
            <article className="card">
            <h2 className="card-header">Game Card</h2>
            <div className="card-body">
            <h5 className="card-subtitle">{this.state.game.team1} vs. {this.state.game.team2} ({this.state.game.score})</h5><hr></hr>
            <small><p>Date: {this.state.game.when} </p></small>
              <p>
                {this.state.game.notes}
              </p>
              <Link to="/games" className="btn btn-outline-primary">← Back to Games</Link></div>
            </article><br></br>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        

        {/* <div>
        <ImageUploader multi={false} baseURL={'http://localhost:8080'} />
      </div> */}

      </Container>
    );
  }
}

export default Detail;
