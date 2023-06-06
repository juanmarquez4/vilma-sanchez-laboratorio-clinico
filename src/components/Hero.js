import React from "react";
import { Container, Carousel } from "react-bootstrap";

function Hero ({dataHero}){
    return(
        <Container className="hero-container">
            <Carousel >
                {dataHero.map((heroData) => (
                    <Carousel.Item key={heroData.id}>
                    <img
                    className="image d-block w-100"
                    src={heroData.imgSrc}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{heroData.title}</h3>
                    <p>{heroData.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Hero;
