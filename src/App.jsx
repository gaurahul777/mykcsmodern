import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/eyes';
import { Services } from './components/Services';
import Products from './components/Products';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the /contact route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Default route for Home Page and other sections */}
        <Route
          path="/*"
          element={
            <div className='w-full min-h-screen h-auto text-white bg-zinc-900 overflow-hidden'>
              <Navbar />
              <LandingPage />
              <Marquee />
              <About />
              <Services />
              <Products />
              <Eyes />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
