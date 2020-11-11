import React from 'react'
import Packages from './Packages'
import packageData from '../packageData'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'

const MainContent = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <Image
              className="bannerLogo"
              src="/images/facebook_cover_photo_2.png"
              fluid
              rounded
            />
          </Col>
        </Row>
        {/* <Image className="bannerLogo"src="/images/dc_logo.png" fluid rounded /> */}
        {/* <h1>DrumCare YEG</h1> */}
        <hr />
        <Row>
          <Col className="text-center">
            <h4>Services</h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="rounded bg-primary text-white">
              <Card.Body>
                <Card.Title>
                  <Card.Header className="text-center text-light">
                    Tuning:
                  </Card.Header>
                </Card.Title>
                <Card.Text>
                  Your drum kit isn't trash! It probably just needs to be tuned.
                  Tuning drums can be a difficult and time consuming process, so
                  why not leave it to us! We’ll get your kit sounding top notch
                  so you can just focus on playing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="rounded bg-primary text-white">
              <Card.Body>
                <Card.Title className="text-center">
                  <Card.Header>Drum Head Replacement:</Card.Header>
                </Card.Title>
                <Card.Text>
                  Drum heads get beaten and worn over time and need replacing.
                  Depending on the amount of pounding you're giving your drum
                  heads, we recommend changing them at least once a year. If you
                  notice many dents or wear away of coating on your drum heads,
                  its time for new heads! Our drum head replacement service
                  saves you the hassle of finding new heads. Give us your drum
                  sizes, preference of clear or coated and we’ll bring them to
                  you and replace your old ones!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="rounded bg-primary text-white">
              <Card.Body>
                <Card.Title className="text-center">
                  <Card.Header>Kit Installation:</Card.Header>
                </Card.Title>
                Have a brand new drum kit and not sure where to start when it
                comes to setting it up? No worries, we will come set it up for
                you where ever you like and get it sounding rock star ready.
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-3">
            <hr />
            <h4>Our maintenance packages offer a full drum kit refresh!</h4>
            <h4>Choose from one of our three packages below:</h4>
            <hr />
          </Col>
        </Row>
        <Row>
          {packageData.map((pkg, i) => {
            return (
              <Col key={i}>
                <Packages
                  name={pkg.name}
                  subHeading={pkg.subHeading}
                  features={pkg.features}
                />
              </Col>
            )
          })}
        </Row>

        <div className="text-center py-3">
          <Button href="/form">Book Now</Button>
        </div>
      </Container>
    </>
  )
}

export default MainContent
