import React from "react";
import Typewriter from "typewriter-effect";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ParticlesJS from "./Particles"
import heroImage from "../../img/hussainImg.png"

function Home() {
  return (
    <>
    <ParticlesJS/>
    <div className="mainpage" id="home">
      <div className="textarea" data-aos="fade-right" data-aos-duration="1500" >
        <h2>Hi, Myself</h2>
        <h1>Mohammed Hussain</h1>
        And I'm a <b>Web</b>
        <span style={{ color: "#7966f0",display:'inline-block',marginLeft:'10px', fontSize:'20px',}}>
          <Typewriter
            className="changeword"
            options={{
              color: "red",
              strings: ["Designer", "Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati perspiciatis deserunt autem id deleniti aspernatur fugiat minima quo ullam.</p>
            <div className="iconbox">
                <ul>
                    <li><FaFacebook /></li>
                    <li><FaXTwitter />                    </li>
                    <li><FaInstagram />
                    </li>
                    <li><FaLinkedinIn />
                    </li>
                </ul>
            </div>
            <br /><br /><br /><br />
            <div className="cv"><a href="public/data/resume" download='self aadhar'>Download C.V.</a></div>
      </div>
      <div className="photoarea" data-aos="fade-left" data-aos-duration="1500">
        <img src={heroImage} loading='lazy' alt="" />
      </div>

    </div>
      </>
  );
}

export default Home;
