import React from 'react'
import './experience.css'
import { TiHtml5 } from "react-icons/ti"; 
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { SiArduino } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { TbPhotoEdit } from "react-icons/tb";
import { FaFileExcel } from "react-icons/fa";


const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I have </h5>
      <h2> My experience </h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developer</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <TiHtml5 size={35} className='experience__detials-icon'/>
              <div>
                <h4> HTML </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <FaCss3Alt size={35} className='experience__detials-icon'/>
              <div>
                <h4> CSS </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <FaBootstrap size={35} className='experience__detials-icon'/>
              <div>
                <h4> Bootstrap </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <RiReactjsFill size={35} className='experience__detials-icon'/>
              <div>
                <h4> ReactJS </h4>
                <small className='text-light'>
                  Intermediate
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <IoLogoJavascript size={35} className='experience__detials-icon'/>
              <div>
                <h4> Javascript </h4>
                <small className='text-light'>
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience__backend'>
        <h3>Backend Developer</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <FaJava size={35} className='experience__detials-icon'/>
              <div>
                <h4> Java </h4>
                <small className='text-light'>
                  Experienced
              </small>
              </div>
            </article>
            <article className='experience__detials'>
              <FaPython size={35} className='experience__detials-icon'/>
              <div>
                <h4> Python </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <SiMysql size={35} className='experience__detials-icon'/>
              <div>
                <h4> SQL </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <FaNodeJs size={35} className='experience__detials-icon'/>
              <div>
                <h4> NodeJS </h4>
                <small className='text-light'>
                  Beginner
                </small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience__others'>
        <h3>Other Developing tools</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <LuFigma size={35} className='experience__detials-icon'/>
              <div>
                <h4> Figma</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <SiArduino size={35} className='experience__detials-icon'/>
              <div>
                <h4> Arduino IDE </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <SiCplusplus size={35} className='experience__detials-icon'/>
              <div>
                <h4> C/C++ </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <SiCanva size={35} className='experience__detials-icon'/>
              <div>
                <h4> Canva </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <TbPhotoEdit size={35} className='experience__detials-icon'/>
              <div>
                <h4> VN editing app </h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience__detials'>
              <FaFileExcel size={35} className='experience__detials-icon'/>
              <div>
                <h4> MS Excel </h4>
                <small className='text-light'>
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience
