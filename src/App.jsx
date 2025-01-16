// src/App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp icon from react-icon
import TeamPage from './Pages/TeamPage';
import ProductPage from './Pages/ProductPage'
import AboutPage from './Pages/AboutPage'
import ReviewPage from './Pages/ReviewPage'


import Advisors from './components/Advisory/Advisory';
import Footer from './components/Footer/Footer';
import ContactPage from './Pages/ContactPage';

function App() {

  return (

    <Router>
       
      <Navbar />
      <main>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/review" element={<ReviewPage/>} />
          <Route path="/contact" element={<ContactPage/>} />




        
        </Routes>
      </main>
      <Footer/>
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
