import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    team: {}
  };
  // When this component mounts, grab the team with the _id of this.props.match.params.id
  // e.g. localhost:3000/teams/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getteam(this.props.match.params.id)
      .then(res => this.setState({ team: res.data }))
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
                <strong>{this.state.team.name}</strong>
              </h2>
              <h5><code>League: {this.state.team.league}</code></h5>
            </Jumbotron>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Row>
        <Col size="md-1"></Col>
          <Col size="md-10">
            <article className="card">
              <h2 className="card-header">Team Card</h2>
              <div className="card-body">
              <h5 className="card-subtitle">{this.state.team.name} ({this.state.team.league})</h5><hr></hr>
              <small><p>Roster: {this.state.team.players}</p></small>
              <p>
                {this.state.team.about}
              </p>
              <Link to="/teams" className="btn btn-outline-primary">← Back to Teams</Link></div>
            </article>
          </Col>
          <Col size="md-1"></Col>
        </Row>

      </Container>
    );
  }
}

export default Detail;
