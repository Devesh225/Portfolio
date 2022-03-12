import React from 'react'
import './Services.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Services() {
  return (
    <div id='services' className='services'>
        <h1>My Services</h1>
        <h4>What can I do for you?</h4>
        <div className="container services__container">
          <div className="services__card services__1">
            <h2>Static Website</h2>
            <div className="services__all">
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Single Page Website</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Built with HTML5, CSS3 and JS</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Tablet and Mobile Responsive</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Amazing Fast Reload</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Great UI/UX Design</h3>
              </div>
            </div>
          </div>
          <div className="services__card services__2">
            <h2>Single Page Dynamic Website</h2>
            <div className="services__all">
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Single Page Website, Component Based Design</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>HTML5, CSS3, ReactJS, and a Reliable Backend</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Tablet and Mobile Responsive</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Amazing Fast Reload and SPA</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Great UI/UX Design, React UI elements</h3>
              </div>
            </div>
          </div>
          <div className="services__card services__3">
            <h2>Multi-Page Dynamic Website</h2>
            <div className="services__all">
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Multi-Page Website, Component Based Design</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>HTML5, CSS3, ReactJS, and a Reliable Backend</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Tablet, Mobile Responsive, Different UI in Mobile</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Amazing Fast Reload and Zero Latency, Clean</h3>
              </div>
              <div className="services__box">
                  <BsPatchCheckFill />
                  <h3>Great UI/UX Design with React UI Elements</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services