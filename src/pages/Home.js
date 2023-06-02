import React from "react";
import logo from "../assets/brano-Mm1VIPqd0OA-unsplash.jpg"


const Home = () => {
    return(
        <div >
        <img className="hero-image" src={logo} alt="Logo"></img>
        <div className="hero-text">
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    )
};

export default Home;