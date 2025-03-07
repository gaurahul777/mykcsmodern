import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/eyes'
import { Services } from './components/Services'
import Products from './components/Products'

const App = () => {
  return (
    <div className='w-full min-h-screen h-auto text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Services/>
      <Products/>
    </div>
  )
}

export default App