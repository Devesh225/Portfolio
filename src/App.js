import React, { Fragment } from 'react'
import About from './components/about/About';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

function App() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Services />
    </Fragment>
  )
}

export default App