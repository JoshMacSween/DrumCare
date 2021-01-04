import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Form from '../screens/FormScreen'

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
              {/* <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/about">
                <Nav.Link className="text-white">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/form">
                <Nav.Link className="text-white">Contact</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title="Packages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Silver</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gold</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Platinum</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header