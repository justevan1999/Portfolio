import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Details from './components/Details'
import Bottom from './components/Bottom'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Details/>
      <Footer/>
      <Bottom/>
    </div>
  )
}

export default App
