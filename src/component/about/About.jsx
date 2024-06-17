import React from 'react'
import './about.css'
import ME from '../../asset/h2.jpg'
import { FaUniversity } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaDiagramProject } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>UnderGrad Computer-Science</h5>
              <small>VIT Chennai</small>
            </article>
            <article className='about__card'>
              <IoSchoolSharp className='about__icon'/>
              <h5>School</h5>
              <small>PSBB School</small>
            </article>
            <article className='about__card'>
              <FaDiagramProject className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Projects</small>
            </article>
          </div>

          <p>
          As a tech enthusiast, I thrive on challenges in the evolving tech landscape. Passionate about innovation, I excel in programming and UI/UX design, creating scalable software solutions. Collaborating with diverse teams has sharpened my leadership skills, ensuring successful projects. I am dedicated to contributing to future-shaping technology.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About