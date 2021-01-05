import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="primary">
          <LinkContainer to="/">
            <Navbar.Brand className="text-white">DrumCare</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <LinkContainer to="/about">
                <Nav.Link className="text-white">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/form">
                <Nav.Link className="text-white">Contact</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header