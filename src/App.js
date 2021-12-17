import React from "react";

import NavbarComponent from "./components/Navbar";
import CardComponent from "./components/Card";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import About from "./components/About";

import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Jumbo />
      <About/>
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
      <Footer/>
    </>
  );
}
