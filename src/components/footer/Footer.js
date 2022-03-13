import React from 'react'
import './Footer.css';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer__links">
          <a className='footer__name' href="#about">Devesh Tulshyan</a>
          <ul>
            <li><a href='#header'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className="footer__socials">
          <a href="https://twitter.com/TulshyanDevesh" target="_blank" rel="noreferrer"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/devesh-tulshyan-b674421a2/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a rel="noreferrer" href="https://github.com/Devesh225" target="_blank"><BsGithub /></a>
        </div>
        <div className="footer__copyright">
          <p>Made with <span>❤</span> by Devesh</p>
          <p>Copyright, {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer;