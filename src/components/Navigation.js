import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css'

function Navigation() {

    const handleClick = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        
        <div className="topnav" id="myTopnav">
          <a href="/" className="active">Vilma Sanchez Laboratorio Clinico</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/examenes">Exámenes</a>
          <a href="/contactenos">Contáctenos</a>
          <a href={void(0)} className="icon" onClick={handleClick}>
            <i className="fa fa-bars"></i>
          </a>
      </div>
    )
}

export default Navigation;