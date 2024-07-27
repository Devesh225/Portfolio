import './Header.css';
import Image from '../../assets/image_1.jpg';
import React from 'react'
import RESUME from '../../assets/RESUME.pdf';

import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Header() {
  return (
    <div className='header' id='header'>
      <div className="container header__container">
        <h5>Pleasure to meet you. Myself,</h5>
        <h1>Devesh Tulshyan</h1>
        <h4>FullStack Developer</h4>
        <div className="header__cta">
          <a download href={RESUME} className='btn'>Download Resume</a>
          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
        <div className="header__image">
          <img src={Image} alt="Myself" />
        </div>
          <a href="#contact" className="header__scroll">Contact Me</a>
        <div className="header__socials">
          <a rel="noreferrer" href="https://twitter.com/code4fun_devesh" target="_blank"><BsTwitter /></a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/devesh-tulshyan-b674421a2/" target="_blank"><BsLinkedin /></a>
          <a rel="noreferrer" href="https://github.com/Devesh225" target="_blank"><BsGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Header;
