import React from 'react'
import './Skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Skills() {
  return (
    <div id='skills' className='skills'>
        <h1>My Skills</h1>
        <h4>Tools, Libraries and Frameworks</h4>
        <div className="container skills__container">
            <div className="skills__card skills__frontend1">
                <h2>Frontend Development</h2>
                <div className="skills__all">
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>HTML</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>CSS</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className="skills__card skills__frontend2">
                <h2>UI Libraries and Frameworks</h2>
                <div className="skills__all">
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>Bootstrap</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>Tailwind CSS</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>ReactJS</h3>
                    </div>
                </div>
            </div>
            <div className="skills__card skills__backend">
                <h2>Backend Development</h2>
                <div className="skills__all">
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>NodeJS</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>MongoDB</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>SQL</h3>
                    </div>
                </div>
            </div>
            <div className="skills__card skills__tools">
                <h2>Special Tools</h2>
                <div className="skills__all">
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>GIT</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>Firebase</h3>
                    </div>
                    <div className="skills__box">
                        <BsPatchCheckFill />
                        <h3>Networking</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills