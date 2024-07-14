import React from 'react'

function MobileNavbar({isOpen}) {
  return (
    <div className={`mobilenav ${isOpen ? 'open' : ''}`}>
            <div className="mobilelogo">Mohammed's Laptop</div>
            <div className="m-menubar">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                <button className='btnhireme'>Hire me</button>
            </div>
        </div>
        )
      
  
}

export default MobileNavbar
