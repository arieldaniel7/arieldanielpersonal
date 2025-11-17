import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header  from './components/Header'
import Image from './components/image'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Image />
      <Footer />
    </div>
  )
}

export default App
