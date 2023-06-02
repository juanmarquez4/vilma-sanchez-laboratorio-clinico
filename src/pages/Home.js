import React from "react";
import Hero from '../components/Hero'
import CardSection from '../components/CardSection'

import data from '../utils/data'


function Home() {
    return(
      <>
       <Hero dataHero={data.hero}/>
       <CardSection dataCard={data.card} />
      </>
       
   
     
    )
};

export default Home;