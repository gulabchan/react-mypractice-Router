import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import React from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <NavBar />
        <about />
      </BrowserRouter>
    </div>
  );
}

export default App;
