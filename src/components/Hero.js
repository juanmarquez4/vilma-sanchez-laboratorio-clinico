import React from "react";
import { Container, Image } from "react-bootstrap";
import hero from '../assets/brano-Mm1VIPqd0OA-unsplash.jpg'

function Hero(){
    return(
        <Container  className="hero-container p-0">
            <Image className="hero-image mh-100" src={hero} />
        </Container>
        
    )
}

export default Hero;