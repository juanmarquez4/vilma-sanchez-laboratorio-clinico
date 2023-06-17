import React from "react";
import Hero from '../components/Hero'
import CardSection from '../components/CardSection'
import Location from "../components/Location";


import data from '../utils/data'


function Home() {
    return(
      <>
       <Hero dataHero={data.hero}/>
       <h1 className="heading">Examenes de laboratorio</h1>
       <CardSection dataCard={data.card} />
       <h1 className="heading">Horarios de atencion y ubicacion</h1>
       <Location/>
      </>
       
   
     
    )
};

export default Home;