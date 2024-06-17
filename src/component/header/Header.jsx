import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asset/h3.jpg'
import HeaderSocials from './HeaderSocials'
import ME2 from '../../asset/h1.jpg'

const Header = () => {
  return (
   <header>
    <div className="head__container">
      <h5>Hello I'm</h5>
      <h1>Harshad Subramaniyam</h1>
      <h5 className='text-light'>UnderGrad Computer Science Student</h5>
      <CTA />  
      <HeaderSocials/>
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>
      <div className='me2'>
        <img src={ME2} alt='me2'/>
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header