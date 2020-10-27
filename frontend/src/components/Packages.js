import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Packages = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Bronze</Card.Title>
              <Card.Text>
                Our bronze package consists of:
                <ul>
                  <li>Full kit tuning</li>
                  <li>$100 for a 4 piece kit</li>
                  <li>$20 for each additional drum</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Silver</Card.Title>
              <Card.Text>
                Everything from the Bronze Package, plus:
                <ul>
                  <li>Drum kit health check</li>
                  <li>Drum head replacement</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Platinum</Card.Title>
              <Card.Text>
                Our Gold package includes everything from Silver, plus:
                <ul>
                  <li>Premium replacement heads for the top and bottom</li>
                  <li>Cleaning of drum shells, rims and lugs</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Packages
