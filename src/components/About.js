import { Container, Row, Col, Image } from "react-bootstrap";
import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section py-xs-0 py-md-5 d-md-flex"
      >
        <Container>
          <Row className="p-sm-5 justify-content-center align-items-center">
            <Col sm={12} md={6} lg={5} xl={4} className="p-0 text-center">
              <Image
                src={profilePic}
                id="profile-pic"
                className="shadow"
                alt="It's me!"
                fluid
              />
            </Col>
            <Col
              md={6}
              className="bg-white px-4 px-md-5 pt-4 pt-md-5 pb-5 justify-content-start shadow"
            >
              <h1>Efren Rodriguez</h1>
              <h4 className="text-muted pb-3">Fullstack Developer </h4>
              <h5>Email:</h5>
              <p>efrenjr.rodriguezl@gmail.com</p>
              <h5>Location:</h5>
              <p>Riyadh, Saudi Arabia</p>
              <h5>Date of Birth:</h5>
              <p>April 1990 (31 years old)</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
