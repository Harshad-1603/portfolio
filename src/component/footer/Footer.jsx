import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {

  {/*const date=Date().toString();
  const now = new Date()*/}

  return (
    <footer>
      <a href='#' className='footer__logo'>Harshad</a>
        <p> Driven by passion and a relentless pursuit of innovation, I am eager to bring my programming skills to a dynamic and forward-thinking team. With a strong foundation in coding, problem-solving, and continuous learning, I am ready to tackle new challenges and contribute to impactful projects that shape the future of technology. </p>
      {/*<ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>*/}

      <div className='footer__socials'>
        <a href='https://www.instagram.com/_harshad_.s_/?hl=en'><IoLogoInstagram/></a>
        <a href='https://www.linkedin.com/in/harshad1603/'><FaLinkedin/></a>
      </div>

      <div className='footer__copyrights'>
        <small>&copy; Harshad . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer