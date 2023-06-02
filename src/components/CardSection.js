import React from "react";
import { Container, Card } from "react-bootstrap";

export default function CardSection ({dataCard}) {
    return(
        <Container className="card-section-container d-flex flex-wrap justify-content-between  py-0 my-5">
                    {dataCard.map((cardData) => (
                        <Card style={{ width: '18rem' }} key={cardData.id}>
                            <Card.Img variant="top" src={cardData.imgSrc}  />
                            <Card.Body>
                                <Card.Title>{cardData.title}</Card.Title>
                                <Card.Text>{cardData.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
        </Container>
        )
};

