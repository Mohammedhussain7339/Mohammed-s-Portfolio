import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    });
  }, []);
  
  return (
    <>      <h1 className='h1'>Contact <b>Me</b></h1>

    <div className='contactContainer' id='contact' data-aos="zoom-in-up" data-aos-duration="1500">
      <div className="textbox">
      <input type="text" placeholder='Name' />
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Contact' />
      <input type="text" placeholder='About' />
      <input type="text" className='textinput' placeholder='Write Message' />
      <input type="submit" className='submit' />
      </div>
    </div>
    </>
  )
}

export default Contact
