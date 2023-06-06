import React from "react";
import { Container, Card } from "react-bootstrap";
import MyComponent from "../components/MyComponent";


function Location () {

    
    return (
        <Container className="location-container d-flex">
            <Card className="location-card">
                <p>Horarios:</p>
                <p>Telefonos:</p>
            </Card>
            <Card className="location-card">
                <MyComponent/>
            </Card>
        </Container>
    );
};

export default Location;

