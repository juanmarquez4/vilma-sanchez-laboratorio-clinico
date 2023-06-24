import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation() {

    return (
      <Container fluid className="p-0">
        <Navbar expand="lg" variant="light" bg="transparent">
          <Container fluid>
            <Navbar.Brand href="#hero">Vilma Sanchez Laboratorio Clinico</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              
                <a className='nav-link' href="#servicios">Servicios</a>
                <a className='nav-link' href="#examenes">Exámenes</a>
                <a className='nav-link' href="#contactenos">Contáctenos</a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    )
}

export default Navigation;