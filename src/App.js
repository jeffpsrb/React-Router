import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Tugas/About';
import Contact from './Tugas/Contact';
import Home from './Tugas/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/about">Tentang</a>
            </li>
            <li>
              <a href="/contact">Kontak</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

