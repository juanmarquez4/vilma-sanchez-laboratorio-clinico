import React from "react";
import Hero from '../components/Hero'
import ValoresSection from "../components/ValoresSection";
import ServiciosSection from '../components/ServiciosSection'
import ExamenesSection from '../components/ExamenesSection'
import ContactenosSection from "../components/ContactenosSection";



import data from '../utils/data'


function Home() {
    return(
      <>
       <Hero dataHero={data.hero}/>
       <ValoresSection dataValores={data.valores}/>
       <ServiciosSection dataCard={data.card} />
       <ExamenesSection dataExamenes={data.examenes}/>
       <ContactenosSection/>
      </>
    )
};

export default Home;