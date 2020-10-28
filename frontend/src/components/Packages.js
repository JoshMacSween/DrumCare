import React from 'react'
// import { packageData as kitPackages } from '../packageData'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Packages = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="rounded">
            <Card.Body>
              <Card.Title className="text-center">{props.name}</Card.Title>
              <Card.Text>
                {props.subHeading}
                <ul>
                  {props.features.map((feature, i) => {
                    return <li key={i}>{feature}</li>
                  })}
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
