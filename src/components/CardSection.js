import React from "react";
import hero from '../assets/brano-Mm1VIPqd0OA-unsplash.jpg'

import { Container, Card } from "react-bootstrap";

function CardSection() {
    return(
        <Container className="card-section-container d-flex flex-wrap justify-content-between  py-0 my-5">
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hero} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hero} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hero} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        )
};

export default CardSection;