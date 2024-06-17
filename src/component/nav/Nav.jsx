import React, { useState } from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidMessageCheck } from "react-icons/bi";
import { TbFileExport } from "react-icons/tb";

const Nav = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active': ''}><FaHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaBookOpen/></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><TbFileExport/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiSolidMessageCheck/></a>
    </nav>
  )
}

export default Nav