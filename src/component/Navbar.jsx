import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";



function Navbar({ isOpen, onHamburgerClick }) {
  return (
    <>
        <div className='navbar' data-aos="fade-down" data-aos-duration="1000">
        
            <div className="logo">
                <h2>Mohammed's Portfolio</h2>
            </div>
            <div className="menubar">
                <ul>
                    <li className='menulist'>
                        <a href="#">
                        Home </a></li>
                    <li className='menulist'>
                        <a href="#skills">
                        Skills </a></li>
                    <li className='menulist'>
                        <a href="#projects">
                        Project </a></li>
                    <li className='menulist'>
                        <a href="#about">
                        About </a></li>
                    <li className='menulist'>
                        <a href="#contact">
                        Contact </a></li>
                    <li className='hireme'>Hire me</li>
                </ul>
            </div>

            <div className="hamburger">
            <span onClick={onHamburgerClick}>
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </span>
            </div>
        </div>
      
    </>
  )
}

export default Navbar
