import React from "react";
import { Container, Card } from "react-bootstrap";
import MyComponent from "../components/MyComponent";


function Location () {

    
    return (
        <Container className="location-container d-flex">
            <Card className="location-card border-0">
                <h3>Horarios:</h3>
                <p>7:00 a.m. - 5:00 p.m.</p>
                <h3>Telefonos:</h3>
                <p>(0212) 431-7559</p>
            </Card>
            <Card className="location-card">
                <MyComponent/>
            </Card>
        </Container>
    );
};

export default Location;

