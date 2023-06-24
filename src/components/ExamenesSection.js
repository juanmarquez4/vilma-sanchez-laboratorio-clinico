import React from "react";
import { Container, Card } from "react-bootstrap";

export default function CardSection ({dataExamenes}) {
    return(
        <Container id='examenes' className="card-section-container  justify-content-between  py-0 my-5">
                    {dataExamenes.map((examenesData) => (
                        <Card style={{ minWidth: '18rem', border:'none' }} key={examenesData.id}>
                            <Card.Body>
                                
                                <Card.Text>{examenesData.prueba}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
        </Container>
        )
};

