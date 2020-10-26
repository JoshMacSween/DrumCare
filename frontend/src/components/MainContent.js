import React from 'react'
import Packages from './Packages'
import { Container, Row, Col, Button } from 'react-bootstrap'

const MainContent = () => {
  return (
    <>
      <Container>
        <h1>DrumCare YEG</h1>

        <blockquote className="blockquote ml-4">
          <i>
            Professional drum tuning and maintenace service. Convenient and
            hassle-free
          </i>
        </blockquote>

        <Packages />
        <div className="text-center py-3">
          <Button href="/form">Book Now</Button>
        </div>
      </Container>
    </>
  )
}

export default MainContent
