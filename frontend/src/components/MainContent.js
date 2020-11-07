import React from 'react'
import Packages from './Packages'
import packageData from '../packageData'
import { Container, Row, Col, Button } from 'react-bootstrap'

const MainContent = () => {
  return (
    <>
      <Container>
        <h1>DrumCare YEG</h1>

        <blockquote className="blockquote ml-4">
          <i>
            Professional drum kit tuning and maintenance, convenient and hassle
            free. We’ll come to you!
          </i>
        </blockquote>

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
