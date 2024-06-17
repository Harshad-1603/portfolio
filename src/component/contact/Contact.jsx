import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_75ki9hw', 'template_g8mogk7', form.current,'h_g1sytCVBECmYJMa')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>harshad.subramaniyam03@gmail.com</h5>
            <a href='mailto:harshad.subramaniyam03@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <IoLogoLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>harshad1603</h5>
            <a href='https://www.linkedin.com/in/harshad1603/' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-8248829258</h5>
            <a href='https://wa.me/918248829258?text=Hello Harshad, I visited your profile?' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name ' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact