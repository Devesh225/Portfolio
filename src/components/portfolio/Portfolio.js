import React from 'react'
import './Portfolio.css';
import LinkedIn from '../../assets/linkedin.png';
import GoogleKeep from '../../assets/googlekeep.png'

function Portfolio() {

  const portfolioItems = [
    {
      PID: 1,
      imageLink: LinkedIn,
      title: "LinkedIn Clone",
      githubLink: "https://github.com/Devesh225/Linkedin-Clone",
      liveLink: "https://linkedin-clone-devesh.web.app/", 
    },
    {
      PID: 2,
      imageLink: GoogleKeep,
      title: "Google Keep Clone",
      githubLink: "https://github.com/Devesh225/Note-Keeper",
      liveLink: "http://devesh225.github.io/Note-Keeper",
    } 
  ];

  return (
    <div id='portfolio' className='portfolio'>
        <h1>My Portfolio</h1>
        <h4>Recent Projects</h4>
        <div className="container portfolio__container">
          {
            portfolioItems.map(({PID, imageLink, title, githubLink, liveLink}) => {
              return (
                <div key={PID} className="portfolio__card">
                  <div className="portfolio__projectImage">
                  <img src={imageLink} alt="LinkedIn Screenshot" />
                  </div>
                  <div className="portfolio__projectContent">
                    <h3>{title}</h3>
                    <div className="portfolio__projectButtons">
                      <a rel="noreferrer" target='_blank' className='btn btn1' href={githubLink}>Github Repo</a>
                      <a rel="noreferrer" target='_blank' className='btn btn-primary btn2' href={liveLink}>Live Demo</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Portfolio