import React from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../components/Contact';
import NavBar from "../components/NavBar";
import SocialLinks from '../components/SocialLinks';
import About from '../pages/About';
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio';
const Default = ({ children }) => {
  const location = useLocation();

  return (
    <div className="default-layout">
      <NavBar />
      {location.pathname === "/" ? <Home/> : null}
      {location.pathname === "/about" ? <About /> : null}
      {location.pathname === "/portfolio" ? <Portfolio /> : null}
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default Default;
