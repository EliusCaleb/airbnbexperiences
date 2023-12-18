import React from 'react'
import logo from "../images/airbnb-logo.png"


function Navbar() {
  return (
    <div>
        <nav>
            <img src={logo} className="nav--logo"  alt='/'/>
        </nav>

    </div>
  )
}

export default Navbar