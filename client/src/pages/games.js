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
    team1: "",
    team2: "",
    score: "",
    when:  "",
    notes: ""
  };


  componentDidMount() {
    this.loadgames();
    // this.loadteams();
  }

  loadgames = () => {
    API.getgames()
      .then(res =>
        this.setState({ games: res.data, team1: "", team2: "", score: "", when: "", notes: "" })
      )
      .catch(err => console.log(err));
  };

  // loadteams = () => {
  //   API.getteams()
  //     .then(res =>
  //       this.setState({ teams: res.data, name: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deletegame = id => {
    API.deletegame(id)
      .then(res => this.loadgames())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleDateChange = event => {
  //   const { when, value } = event.target;
  //   this.setState({
  //     [when]: value
  //   });
  // };

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  // handleTeam1InputChange = event => {
  //   const { team1, value } = event.target;
  //   this.setState({
  //     [team1]: value
  //   });
  // };

  // handleTeam2InputChange = event => {
  //   const { team2, value } = event.target;
  //   this.setState({
  //     [team2]: value
  //   });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.team1 && this.state.team2 && this.state.score && this.state.when) {
      API.savegame({
        team1: this.state.team1,
        team2: this.state.team2,
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
              <h1><i class="fas fa-folder-plus"></i> <strong>Add Game</strong></h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.team1}
                onChange={this.handleInputChange}
                name="team1"
                placeholder="team one*"
              />
              <Input
                value={this.state.team2}
                onChange={this.handleInputChange}
                name="team2"
                placeholder="team two*"
              />
               {/* <div className="btn-block">
                <h5>+ Add Game Form:</h5><hr></hr>
                <p><select>
                {this.state.teams.map((teams) => <option> {teams.name} </option>)}
                </select> </p></div>
                <p><small>vs. </small></p>
                <div className="btn-block">
                <p><select>
                {this.state.teams.map((teams) => <option> {teams.name} </option>)}
                </select></p>
                </div> */}
              <Input
                value={this.state.score}
                onChange={this.handleInputChange}
                name="score"
                placeholder="score*"
              />
              <Input
                value={this.state.when}
                onChange={this.handleInputChange}
                name="when"
                placeholder="date* (dd/mm/yyyy)"
              />
              {/* <p>
              <DatePicker
                todayButton={"Today"}
                selected={this.state.when}
                select={this.handleInputChange}
                name="when"
              />
              </p> */}
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="game notes"
              />
              
              <FormBtn
                disabled={!(this.state.score && this.state.when)}
                onClick={this.handleFormSubmit}
              >
                Submit Game
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1><i class="fas fa-folder-open"></i> <strong>Game List</strong></h1>
            </Jumbotron>
            {this.state.games.length ? (
              <List>
                {this.state.games.map(game => (
                  <ListItem key={game._id}>
                    <Link to={"/games/" + game._id}>
                      <strong>
                        {game.team1} v {game.team2}, {game.score}
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
