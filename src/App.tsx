import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shops from './pages/Shops';
import News from './pages/News';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<BlogPost />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <LanguageToggle />
      </div>
    </Router>
  );
}

export default App;