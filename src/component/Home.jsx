import React from "react";
import Typewriter from "typewriter-effect";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



function Home() {
  return (
    <>
    <div className="mainpage" id="home">
      <div className="textarea" data-aos="fade-right" data-aos-duration="1500" >
        <h2>Hi, Myself</h2>
        <h1>Mohammed Hussain</h1>
        And I'm a <b>Web</b>
        <span style={{ color: "#7966f0",display:'inline-block',marginLeft:'10px' }}>
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
            <div className="cv"><a href="public/data/self aadhar_1.pdf" download='self aadhar'>Download C.V.</a></div>
      </div>
      <div className="photoarea" data-aos="fade-left" data-aos-duration="1500">
        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

    </div>
      </>
  );
}

export default Home;
