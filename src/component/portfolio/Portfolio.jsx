import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/alc.png'
import IMG2 from '../../asset/shop.png'
import IMG3 from '../../asset/turf.jpg'
import IMG4 from '../../asset/vote.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3> Alcohol Detection To prevent Car Accidents</h3>
          <div className='portfolio__item-cta'>
            <a href='https://drive.google.com/drive/folders/1y1v9gmwUK6Oa84CWgekPfnIkJGSSpyDa?usp=sharing' className='btn'>GitHub</a>
            <a href='https://dribbble.com/shots/16451430-Car-Interface' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3> Fashion App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Harshad-1603' className='btn'>GitHub</a>
            <a href='https://dribbble.com/shots/16451430-Car-Interface' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3> Turf Booking App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Harshad-1603' className='btn'>GitHub</a>
            <a href='https://dribbble.com/shots/16451430-Car-Interface' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3> E-voting Machine using RFID and Fingerprint sensors</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Harshad-1603' className='btn'>GitHub</a>
            <a href='https://dribbble.com/shots/16451430-Car-Interface' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio