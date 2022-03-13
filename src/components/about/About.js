import React from 'react'
import './About.css';
import Image from '../../assets/image_2.jpg';
import { BsAward } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineProject } from 'react-icons/ai';
import Card from './Card';

function About() {
  return (
    <div className='about' id='about'>
      <h1>About Me</h1>
      <h4>Self-Taught Developer</h4>
      <div className="container about__container">
        <div className="about__image">
          <img src={Image} alt=""/>
        </div>
        <div className="about__info">
          <div className="about__cards">
            <Card Icon={BsAward} Title='Experience' Text='2+ Years'/>
            <Card Icon={FiUsers} Title='Taught' Text='25+ Students'/>
            <Card Icon={AiOutlineProject} Title='Projects' Text='10+ Completed'/>
          </div>
          <p>I'm a Self-taught Full-Stack Developer who loves to build projects, work on different ideas, and create new apps
          every now and then. Besides coding, I have passion in music and I love to play Football. I'm very friendly, feel free 
          to text me anytime for any queries, I'll answer back as soon as possible. Till then, enjoy exploring my Portfolio!</p>
        </div>
      </div>
    </div>
  )
}

export default About