import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials =() => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/feed/' target='_blank'><BsLinkedin size={30} color='black'/></a>
        <a href='https://www.instagram.com/?hl=en' target='_blank'><BsInstagram size={30} color='black'/></a>
        <a href='https://github.com/Harshad-1603' target='_blank'><BsGithub size={30} color='black'/></a>
    </div>
  )
}

export default HeaderSocials