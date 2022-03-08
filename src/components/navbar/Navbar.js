import React, { useState } from 'react'
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { AiOutlineContacts } from 'react-icons/ai';

function Navbar() {
  const [activeLink, setActiveLink] = useState('#header');
  return (
    <div className='navbar'>
      <a href="#header" onClick={() => setActiveLink('#header')} className={activeLink === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#services" onClick={() => setActiveLink('#services')} className={activeLink === '#services' ? 'active' : ''}><RiCustomerService2Line /></a>
      <a href="#contact" onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </div>
  )
}

export default Navbar