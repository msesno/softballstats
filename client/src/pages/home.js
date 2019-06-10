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
        <h1 className="display-3 text-center">softball stats</h1>
        <p className="lead text-center">this is a react app for tracking softball players, teams and games</p>
        <hr className="my-2 text-center" />
        <p>choose a section below to begin</p>
        <p className="btn-grp">
        <ButtonGroup>
        <Button outline color="primary" href="/players">players</Button>
        <Button outline color="primary" href="/teams">teams</Button>
        <Button outline color="primary" href="/games">games</Button>
      </ButtonGroup>
        </p>
      </Jumbotron></Col>
      <Col size="sm-1"></Col>
    </Row></Container></div>
  );
};

export default Example;