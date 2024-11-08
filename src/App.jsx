// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<div className="p-6">About Page</div>} />
          <Route path="/contact" element={<div className="p-6">Contact Page</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
