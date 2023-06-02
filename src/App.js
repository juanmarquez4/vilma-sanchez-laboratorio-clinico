import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Examenes from './pages/Examenes';
import Contactenos from './pages/Contactenos';
import Navigation from './components/Navigation';
import './styles/App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
          <Routes>
            <Route
            path="/"
            element={<Home/>}
            />
            <Route
            path="/nosotros"
            element={<Nosotros/>}
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
      </div>      
    </Router>
    
  );
}

export default App;
