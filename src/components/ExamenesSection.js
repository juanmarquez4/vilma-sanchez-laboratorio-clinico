import React from "react";
import { Container, Card } from "react-bootstrap";

export default function CardSection ({dataExamenes}) {
    return(
        <Container id='examenes'>
            <h1 className="heading">Examenes de Laboratorio</h1>
            <p>En el Laboratorio Clínico Vilma Sánchez ofrecemos una amplia variedad de servicios de laboratorio para satisfacer las necesidades de nuestros pacientes. Algunos de nuestros servicios incluyen:</p>
            <Container  className="card-section-container d-flex flex-wrap justify-content-between  py-0 my-5">
                    {dataExamenes.map((examenesData) => (
                        <Card style={{ width: '18rem', border:'', marginBottom:'16px', background:'lightgrey' }} key={examenesData.id}>
                            <Card.Body>
                                <Card.Text className="text-center">{examenesData.prueba}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
            </Container>
        </Container>
       
        )
};

