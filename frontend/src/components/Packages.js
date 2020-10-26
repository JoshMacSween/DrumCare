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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatum, fugit ut necessitatibus nulla repellat. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Accusantium minus
                expedita exercitationem illo vitae. Quos, ipsa magni. Possimus
                illo rem ea cum, sint omnis ipsum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Silver</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatum, fugit ut necessitatibus nulla repellat. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Accusantium minus
                expedita exercitationem illo vitae. Quos, ipsa magni. Possimus
                illo rem ea cum, sint omnis ipsum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Platinum</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatum, fugit ut necessitatibus nulla repellat. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Accusantium minus
                expedita exercitationem illo vitae. Quos, ipsa magni. Possimus
                illo rem ea cum, sint omnis ipsum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Packages
