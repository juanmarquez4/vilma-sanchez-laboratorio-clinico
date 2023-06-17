import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation() {

    return (
      <Container fluid className="p-0">
        <Navbar expand="lg" variant="light" bg="transparent">
          <Container fluid>
            <Navbar.Brand href="/">Vilma Sanchez Laboratorio Clinico</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/servicios">Servicios</Nav.Link>
                <Nav.Link href="/examenes">Exámenes</Nav.Link>
                <Nav.Link href="/contactenos">Contáctenos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    )
}

export default Navigation;