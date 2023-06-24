import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="d-flex flex-wrap justify-content-between p-2">
           <Navbar.Text className="">
           ©Copyright 2023 - Todos los derechos reservados.
          </Navbar.Text>
          <Navbar.Text className="">
            Creado por:<a href="https://juanmarquez4.github.io/resume/" target="_blank" rel="noreferrer" >Juan Marquez</a>
          </Navbar.Text>
        </Container>
    )
};

export default Footer;

