import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import "../about.css";

export default function About() {
  return (
    <Container className="py-2">
      <Row className="text-center">
        <Col className="bg-primary py-3">
          <h3 className="text-light">About DrumCare</h3>
        </Col>
        <hr />
      </Row>
      <br />
      <Row>
        <p>
          Here at DrumCare we do just what our name says, care about drums. As
          professional drummers in the industry we know that one of the most
          important aspects to a fine playing drum kit is whether or not it is
          in tune.
        </p>
      </Row>
      <Row>
        <Col className="text-center">
          <h3>Mission</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <p>
          Our mission is to make drum maintenance as easy as possible. Servicing
          schools, venues, parents, beginner drummers and drummers that would
          rather spend their time playing the drums than tuning them.
        </p>
      </Row>
      <h5 className="py-2 text-center">Meet the DrumCare team</h5>
      <Row className="py-2">
        <Col className="py-3">
          <Card>
            <Card.Body className="rounded bg-primary text-white">
              <Image src="/images/BB_Smile.jpg" fluid rounded />
              <Card.Title>
                <Card.Header>
                  <h3 className="text-white pt-3">Brandi</h3>
                </Card.Header>
              </Card.Title>
              <Card.Text>
                With a Bachelors Degree in Music Composition with a minor in
                Drums from MacEwan University, plus 7 years in instrument
                retail, Brandi knows the ins and outs of shell make, skin
                performance, and instrument longevity.<br /><br />
                When not wearing the
                DrumCare cape, Brandi works as a freelance composer, teaches
                drums/guitar/piano, plays in 3 bands, and produces a
                podcast.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="py-3">
          <Card>
            <Card.Body className="rounded bg-primary text-white">
              <Image
                className="pl-5"
                src="/images/JG_Profesh.jpg"
                style={{ maxHeight: "565px" }}
                fluid
                rounded
              />

              <Card.Title>
                <Card.Header>
                  <h3 className="text-white pt-2">Jon</h3>
                </Card.Header>
              </Card.Title>
              <Card.Text>
                Drum Instructor by day, professional drummer by night with a
                Bachelors Degree in Drum Performance from MacEwan University,
                Jon knows the importance of a good sounding kit. <br /><br />
                Apart from being the drum tuning master at DrumCare, Jon also
                works as a drum instructor and freelance session drummer around
                Edmonton
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
