import React from 'react'

function Contact() {
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
