import React from 'react'
import Navbar from './Components/Navbar'
import Heroes from './Components/Heroes'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Heroes />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

export default App
