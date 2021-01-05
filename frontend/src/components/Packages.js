import React from "react";
// import { packageData as kitPackages } from '../packageData'
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const Packages = (props, { name, star }) => {

  return (
    <Container>
      <Row>
        <Col>
          <Card className="rounded bg-primary">
            <Card.Body>
              <Card.Title className="text-center text-white">
                <Card.Header>
                  <h4 className="text-light">
                    <strong>{props.name}</strong>
                  </h4>
                </Card.Header>
                <br />
                <Card.Subtitle className="text-light">
                  <p>
                    <strong>{props.subHeading}</strong>
                  </p>
                </Card.Subtitle>
              </Card.Title>
              {/* <Card.Text className="text-light"> */}
              <ul className="py-3 text-light">
                {props.features.map((feature, i) => {
                  return <li key={i}>{feature}</li>;
                })}
              </ul>
              {/* </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Packages;
