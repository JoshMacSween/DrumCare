import React from 'react'
import Packages from './Packages'
import { Container, Row, Col } from 'react-bootstrap'

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
      </Container>
    </>
  )
}

export default MainContent
