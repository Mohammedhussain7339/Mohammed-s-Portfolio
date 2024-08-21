import React from 'react'
import { FaCode, FaDatabase, FaCogs } from "react-icons/fa"; // Add other icons as needed

function About() {
  return (
    < >
    <h1 className='h1' id='about'>About me</h1>
    <div className='aboutContainer'>
      <div className="profileimg" data-aos="zoom-in-up" data-aos-duration="1500">
        {/* <img  className='img2'src="img/hussain img.png" alt="" /> */}
      <img loading='lazy' className='img2' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      </div>
      <div className="profileme" data-aos="zoom-in-up" data-aos-duration="1500">
        <h2>Hello,</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempore, esse, maxime facilis, exercitationem quisquam nam quae nemo veritatis consequatur doloribus minima fugiat quo eius blanditiis adipisci culpa rerum vero. Fugiat soluta voluptatem quas quasi. Sequi porro esse dolor reprehenderit cum blanditiis repudiandae, expedita laboriosam nam debitis optio ducimus quos, sint sit accusantium, ab pariatur! Iure nostrum earum voluptatum sapiente, obcaecati deserunt. Sapiente tempore ullam iusto eligendi eaque perspiciatis alias?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ratione? Pariatur alias laboriosam doloremque tempore. Totam nulla pariatur tempora consequatur rem iste neque atque eaque quasi? Quos suscipit sequi ipsum, beatae quo accusamus rerum voluptatem eligendi cumque aut. Itaque fugiat debitis quisquam porro alias mollitia recusandae commodi dicta? Sed nostrum perspiciatis veritatis quas error facere autem nihil facilis sint nesciunt.</p>
      </div>
      <div className="profiledata" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="profiledatabox">
          <FaCode style={{fontSize:'35px',color:'#8071de'}}></FaCode>
          <h2>Web Design</h2>
          <h5>Lorem  illum doloribus voluptatibus maxime incidunt aut quo quos voluptatem, voluptate saepe. Eligendi corporis mollitia sapiente vitae in!</h5>
            <a href="">Read More</a>
        </div>
        <div className="profiledatabox">
          <FaCode style={{fontSize:'35px',color:'#8071de'}}></FaCode>
          <h2>Web Design</h2>
          <h5>Lorem  illum doloribus voluptatibus maxime incidunt aut quo quos voluptatem, voluptate saepe. Eligendi corporis mollitia sapiente vitae in!</h5>
            <a href="">Read More</a>
        </div>
        <div className="profiledatabox">
          <FaCode style={{fontSize:'35px',color:'#8071de'}}></FaCode>
          <h2>Web Design</h2>
          <h5>Lorem  illum doloribus voluptatibus maxime incidunt aut quo quos voluptatem, voluptate saepe. Eligendi corporis mollitia sapiente vitae in!</h5>
            <a href="">Read More</a>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default About
