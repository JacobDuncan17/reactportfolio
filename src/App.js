import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Default from './layouts/default';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router basename="/reactportfolio/">
      <Default>
        <div className="bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Default>
    </Router>
  );
}

export default App;
