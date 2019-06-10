import React from "react";
import { Jumbotron, Button, ButtonGroup } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";

const Example = (props) => {
  return (
    <div>
      <br></br>
      <Container>
      <Row>
      <Col size="sm-1"></Col>
      <Col size="sm-10">
      <Jumbotron className="text-center">
        <h1 className="text-center"><small><i class="fas fa-baseball-ball fa-spin"></i></small> <strong>softball stats</strong></h1>
        <p className="lead text-center">react app for tracking softball <br></br>players, teams and games</p>
        <hr className="my-2 text-center" />
        <p>choose a section below to begin</p>
        <ButtonGroup>
        <Button outline color="primary" href="/players">players</Button>
        <Button outline color="primary" href="/teams">teams</Button>
        <Button outline color="primary" href="/games">games</Button>
      </ButtonGroup>
      </Jumbotron></Col>
      <Col size="sm-1"></Col>
    </Row></Container></div>
  );
};

export default Example;