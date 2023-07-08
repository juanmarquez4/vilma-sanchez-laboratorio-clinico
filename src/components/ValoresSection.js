import React from "react";
import { Container, Card } from "react-bootstrap";

export default function ValoresSection ({dataValores}) {
    return(
        <Container id="valores">
            <h1 className="heading">Valores</h1>
            <p>En el Laboratorio Clínico Vilma Sánchez, nos regimos por un conjunto de valores que nos definen como profesionales de la salud y como equipo. Estos valores son:</p>
            <Container  className="card-section-container d-flex flex-wrap justify-content-between  py-0 my-5">
                        {dataValores.map((valoresData) => (
                            <Card style={{ width: '18rem', border:'none' }} key={valoresData.id}>
                                {/* <Card.Img variant="top" src={cardData.imgSrc} className="card-image"  /> */}
                                <Card.Body>
                                    <Card.Title>{valoresData.title}</Card.Title>
                                    <Card.Text>{valoresData.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
            </Container>
        </Container>
       
        )
};