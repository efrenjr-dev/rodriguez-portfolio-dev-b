import React from "react";

import NavbarComponent from "./components/Navbar";
import CardComponent from "./components/Card";
import Jumbo from "./components/Jumbo";

import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Jumbo />
      <Container>
        <Row>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}
