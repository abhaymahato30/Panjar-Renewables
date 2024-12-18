// src/App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp icon from react-icon

function App() {

  return (

    <Router>
       
      <Navbar />
      <main>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<div className="p-6">About Page</div>} />
          <Route path="/contact" element={<div className="p-6">Contact Page</div>} />
        </Routes>
      </main>
       {/* WhatsApp Button */}
       <div className="whatsapp-btn">
        <a href="https://wa.me/9430649460" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon h-14 w-14" />
        </a>
      </div>
    </Router>
  );
}

export default App;
