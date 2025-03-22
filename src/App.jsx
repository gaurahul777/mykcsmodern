import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/eyes'
import { Services } from './components/Services'
import Products from './components/Products'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {


  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <div className='w-full min-h-screen h-auto text-white bg-zinc-900 overflow-hidden'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Services/>
      <Products/>
      <Eyes/>
      <Footer/>
    </div>
  )
}

export default App