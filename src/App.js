import React, { Fragment } from 'react'
import About from './components/about/About';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <About />
    </Fragment>
  )
}

export default App