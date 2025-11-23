// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/sections/Navbar';
import Homepage from './pages/Homepage';
import BlogListingpage from './pages/BlogListingpage';
import BlogDetailpage from './pages/BlogDetailpage';
import FooterTopSection from './components/sections/FooterTopSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/results" element={<Results />} /> */}
            <Route path="/blog" element={<BlogListingpage />} />
            <Route path="/blogdetail" element={<BlogDetailpage />} />
          </Routes>
        </AnimatePresence>
        <FooterTopSection />
        <div className="pt-0 p-1 md:p-1 lg:p-3 xl:p-2 xl:pt-0 2xl:p-6  2xl:pt-0 overflow-x-hidden">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;