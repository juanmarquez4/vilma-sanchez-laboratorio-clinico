import React from "react";
import { Container, Carousel } from "react-bootstrap";

function Hero ({dataHero}){
    return(
        <Container id="hero">
            <Container  className="hero-container">
                <Carousel >
                    {dataHero.map((heroData) => (
                        <Carousel.Item interval={10000} key={heroData.id}>
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
            <p>Durante más de 34 años, el Laboratorio Clínico Vilma Sánchez ha sido un referente en el campo de la salud, brindando servicios de análisis y diagnóstico con altos estándares de calidad. Fundado por la Licenciada Vilma Sánchez, bioanalista graduada de la UCV, este laboratorio familiar ha destacado por su compromiso y excelencia en el cuidado de la salud de nuestros pacientes. Nuestra experiencia y dedicación nos han permitido crecer y contar actualmente con dos sedes en las zonas de Ruiz Pineda y Zoológico.</p>
        </Container>
        
    );
};

export default Hero;
