import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Examenes from './pages/Examenes';
import Contactenos from './pages/Contactenos';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



function App () {
    return (
      <Router>
        {/* <div className="App"> */}
          <Navigation/>
            <Routes>
              <Route
              path="*"
              element={<Home/>}
              />
              <Route
              path="/servicios"
              element={<Servicios/>}
              />
              <Route
              path="/examenes"
              element={<Examenes/>}
              />
              <Route
              path="/contactenos"
              element={<Contactenos/>}
              />
            </Routes>
          <Footer/>
        {/* </div>       */}
      </Router>
      
    );
  
}

export default App;
