import React from "react";
import Hero from '../components/Hero'
import ServiciosSection from '../components/ServiciosSection'
import ExamenesSection from '../components/ExamenesSection'
import ContactenosSection from "../components/ContactenosSection";



import data from '../utils/data'


function Home() {
    return(
      <>
       <Hero dataHero={data.hero}/>
       <h1 className="heading">Servicios</h1>
       <ServiciosSection dataCard={data.card} />
       <h1 className="heading">Examenes de Laboratorio</h1>
       <ExamenesSection dataExamenes={data.examenes}/>
       <h1 className="heading">Horarios de atencion y ubicacion</h1>
       <ContactenosSection/>
      </>
    )
};

export default Home;