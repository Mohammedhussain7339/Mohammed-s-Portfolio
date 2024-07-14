import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home';
import MobileNavbar from './component/MobileNavbar'
import Skills from './component/Skills';
import { useState } from 'react';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Aos from "aos";
import 'aos/dist/aos.css'
import Footer from './component/Footer';
import { FaCircleArrowUp } from "react-icons/fa6";
import About from './component/About';




function App() {
    useEffect(()=>{
        Aos.init();
    },[])
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
      setIsOpen(!isOpen);
  }

  return (
      <div>
          <Navbar isOpen={isOpen} onHamburgerClick={handleHamburgerClick} />
          <MobileNavbar isOpen={isOpen} />
          <Home />
          <Skills/>
          <Projects/>
          <About/>
          <Contact/>
          <a href="#">      <FaCircleArrowUp className="uparrow" />    </a>

          <Footer/>

      </div>
  );
}

export default App
