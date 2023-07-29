import React from 'react'
import Info from './Info'
import {FaDownload} from "react-icons/fa";
import CV from '../assets/steve-Cv.pdf';
import States from './States';
import './about.css';
import Skills from './Skills';
import { resume } from '../data';
import ResumeItem from '../components/ResumeItem';
function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title" data-aos="fade-down" data-aos-duration="1000">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info" data-aos="fade-right" data-aos-duration="1000">
            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">Download CV <span className="button__icon">
              <FaDownload />
              </span></a>
          </div>

          <div className="stats grid" data-aos="fade-left" data-aos-duration="1000">
            <States />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center" data-aos="zoom-out" data-aos-duration="1000">My Skills</h3>

        <div className="skills__container grid" data-aos="zoom-out" data-aos-duration="1000">
          <Skills />
        </div>
      </section>
   
      <div className="separator"></div>

      <section className="resume">
      <h3 className="section__subtitle subtitle__center" data-aos="zoom-out" data-aos-duration="900">Experience & Education</h3>

      <div className="resume__container grid">
        <div className="resume__data" data-aos="fade-up" data-aos-duration="900">
           {resume.map((val) =>{
            if(val.category === 'experience'){
              return <ResumeItem key={val.id} {...val}/>;
            }
           })}
        </div>
        <div className="resume__data" data-aos="fade-up" data-aos-duration="900">
           {resume.map((val) =>{
            if(val.category === 'education'){
              return <ResumeItem key={val.id} {...val}/>;
            }
           })}
        </div>
      </div>
      </section>
    </main>
  )
}

export default About