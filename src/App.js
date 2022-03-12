import React, { Fragment } from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
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
      <Portfolio />
      <Contact />
    </Fragment>
  )
}

export default App