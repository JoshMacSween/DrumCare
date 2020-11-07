import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from 'react-bootstrap'

export default function About() {
  return (
    <Container className="py-2">
      <Row className="text-center">
        <Col>
          <h3>About DrumCare</h3>
        </Col>
      </Row>
      <Row>
        Here at DrumCare we do just what our name says, care about drums. As
        professional drummers in the industry we know that one of the most
        important aspects to a fine playing drum kit is whether or not it is in
        tune.
      </Row>
      <h5 className="py-2 text-center">Meet the DrumCare team:</h5>
      <Row className="py-2">
        {/* <Col>
          <Image className="empImg" src="/images/BB_Drums.jpg" fluid/>
        </Col> */}
        <Col className="py-2">
          <Card>
            <Card.Body className="rounded bg-dark text-white">
              <Image src="/images/BB_Drums.jpg" fluid rounded/>
              <Card.Title>
                <Card.Header>Brandi</Card.Header>
              </Card.Title>
              <Card.Text>
                With a Bachelors Degree in Music Composition with a minor in
                Drums from MacEwan University, plus 7 years in instrument
                retail, Brandi knows the ins and outs of shell make, skin
                performance, and instrument longevity. When not wearing the
                DrumCare cape, Brandi enjoys long walks on the beach with a cup
                of coffee with cream.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="py-3">
          <Card>
            <Card.Body className="rounded bg-dark text-white">
              <Image src="/images/JG_Drums.jpg" fluid rounded />
              <Card.Title>
                <Card.Header>Jon</Card.Header>
              </Card.Title>
              <Card.Text>
                Drum Instructor by day, professional drummer by night with a
                Bachelors Degree in Drum Performance from MacEwan University,
                Jon knows the importance of a good sounding kit. Apart from
                flawlessly laying out fills in odd time signatures Jon enjoys
                long walks on the beach with a cup of black coffee.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {/* <Col>
          <Image className="empImg" src="/images/JG_Drums.jpg" fluid/>
        </Col> */}
        {/* <Col className="py-3">
          <Card>
            <Card.Body className="rounded bg-dark text-white">
              <Card.Img src="/images/JG_Drums.jpg"/>
              <Card.Title>
                <Card.Header>Jon</Card.Header>
              </Card.Title>
              <Card.Text>
                Drum Instructor by day, professional drummer by night with a
                Bachelors Degree in Drum Performance from MacEwan University,
                Jon knows the importance of a good sounding kit. Apart from
                flawlessly laying out fills in odd time signatures Jon enjoys
                long walks on the beach with a cup of black coffee.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      <Row>
        <Col className="text-center">
          <h4>Mission</h4>
        </Col>
      </Row>
      <Row>
        Our mission is to make drum maintenance as easy as possible. Servicing
        schools, venues, parents, beginner drummers and drummers that would
        rather spend their time playing the drums than tuning them.
      </Row>
      <Row>
        <Col className="text-center">
          <h4>Services</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="rounded bg-dark text-white">
            <Card.Body>
              <Card.Title>
                <Card.Header className="text-center text-light">
                  Tuning:
                </Card.Header>
              </Card.Title>
              <Card.Text>
                Your drum kit isn't trash! It probably just needs to be tuned.
                Tuning drums can be a difficult and time consuming process, so
                why not leave it to us! We’ll get your kit sounding top notch so
                you can just focus on playing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded bg-dark text-white">
            <Card.Body>
              <Card.Title className="text-center">
                <Card.Header>Drum Head Replacement:</Card.Header>
              </Card.Title>
              <Card.Text>
                Drum heads get beaten and worn over time and need replacing.
                Depending on the amount of pounding you're giving your drum
                heads, we recommend changing them at least once a year. If you
                notice many dents or wear away of coating on your drum heads,
                its time for new heads! Our drum head replacement service saves
                you the hassle of finding new heads. Give us your drum sizes,
                preference of clear or coated and we’ll bring them to you and
                replace your old ones!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded bg-dark text-white">
            <Card.Body>
              <Card.Title className="text-center">
                <Card.Header>Kit Installation:</Card.Header>
              </Card.Title>
              Have a brand new drum kit and not sure where to start when it
              comes to setting it up? No worries, we will come set it up for you
              where ever you like and get it sounding rock star ready.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
