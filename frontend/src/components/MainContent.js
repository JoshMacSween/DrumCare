import React from "react";
import Packages from "./Packages";
import packageData, { serviceData } from "../packageData";
import ServiceCard from "./ServiceCard";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";

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
            <LinkContainer to="/form">
              <Button className="mb-3">Book Now</Button>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          {serviceData.map((data, i) => {
            return (
              <div key={i}>
                <ServiceCard
                  title={data.title}
                  description={data.description}

                  key={i}
                />
                <br />
              </div>
            );
          })}
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
                  star={pkg.star}
                />
              </Col>
            );
          })}
        </Row>

        <div className="text-center py-3">
          <LinkContainer to="/form">
            <Button block>Book Now</Button>
          </LinkContainer>
        </div>
      </Container>
    </>
  );
};

export default MainContent;
