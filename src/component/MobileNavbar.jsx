import React from 'react'

function MobileNavbar({isOpen}) {
  return (
    <div className={`mobilenav ${isOpen ? 'open' : ''}`}>
            <div className="mobilelogo"><h3 style={{color:'black'}}>Mohammed's Portfolio </h3></div>
            <div className="m-menubar">
            <ul className='mobileul'>
                    <li >
                        <a style={{color:'black'}} href="#">
                        Home </a></li>
                    <li >
                        <a style={{color:'black'}} href="#skills">
                        Skills </a></li>
                    <li >
                        <a style={{color:'black'}} href="#projects">
                        Project </a></li>
                    <li >
                        <a style={{color:'black'}} href="#about">
                        About </a></li>
                    <li >
                        <a style={{color:'black'}} href="#contact">
                        Contact </a></li>
                </ul>
                <button className='btnhireme'>Hire me</button>
            </div>
        </div>
        )
      
  
}

export default MobileNavbar
