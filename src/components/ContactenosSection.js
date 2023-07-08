import React from "react";
import { Container, Card } from "react-bootstrap";
import MyComponent from "./MyComponent";


function Location () {

    
    return (
        <Container id='contactenos' >
            <h1 className="heading">Horarios de atencion y ubicacion</h1>
            <Container className="location-container ">
                <Container className="d-flex mb-5">
                    <Card className="location-card border-0">
                        <h2>Sede Ruiz Pineda</h2>
                        <h4>Direccion:</h4>
                        <p>Bloque 15, escalera 1, P.B. diagonal al Colegio Tiuna. UD-7, Ruiz Pineda.</p>
                        <h4>Horarios:</h4>
                        <p>Lunes a Viernes de 7:00 a.m. - 5:00 p.m.</p>
                        <h4>Telefonos:</h4>
                        <p>(0212) 431-7559</p>
                    </Card>
                    <Card className="location-card">
                        <MyComponent/>
                    </Card>
                </Container>
                <Container className="d-flex">
                    <Card className="location-card border-0">
                        <h2>Sede Zoologico</h2>
                        <h4>Direccion:</h4>
                        <p>Centro Comercial Ciudad Caricuao. Piso 1, Local 50, final del pasillo. UD-3, Zoologico.</p>
                        <h4>Horarios:</h4>
                        <p>Lunes a Viernes de 7:00 a.m. - 5:00 p.m.</p>
                        <h4>Telefonos:</h4>
                        <p>(0212) 431-7559</p>
                    </Card>
                    <Card className="location-card">
                        <MyComponent/>
                    </Card>
                </Container>
            </Container>
        </Container>
        
    );
};

export default Location;

