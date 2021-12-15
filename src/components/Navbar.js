import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Git Merge Activity</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
}
