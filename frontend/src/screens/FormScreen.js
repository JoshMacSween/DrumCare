import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import InputMask from "react-input-mask";

const FormScreen = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h3 className="text-center">Book a Service With Us</h3>
        </Col>
      </Row>
      <Form name="contact" method="post" data-netlify="true">
        <Form.Control type="hidden" name="form-name" value="contact" />

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" />
            </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Col>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <br />

              <InputMask
                style={{
                  minWidth: "350px",
                  backgroundColor: "#f7f7f9",
                  border: "none",
                  color: "#55595c",
                  minHeight: "45px",
                  fontWeight: "400",
                  fontFamily: "arial",
                  letterSpacing: "1.5px"
                }}
                mask="+1 (999)-999-9999"
                maskChar="_"
                type="tel"
                inputMode="numeric"
                name="phone number"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Preffered Date of Service</Form.Label>
              <Form.Control type="date" name="date of service" />
            </Col>

            <Col>
              <Form.Label>Kit Size</Form.Label>
              <Form.Control name="kit size" type="number" min="1" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Service Package</Form.Label>
              <Form.Control name="package" as="select">
                <option>Tuning</option>
                <option>Bronze Maintenance Package</option>
                <option>Silver Maintenance Package</option>
                <option>Gold Maintenance Package</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          placeholder="Anything else you'd like us to know?"
        />

        <Button type="submit" block>
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default FormScreen;
