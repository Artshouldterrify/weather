import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
      <nav className="navbar">
        <i className="fa-solid fa-cloud"></i>
        <h1>Weather<span style={{color:'lightblue'}}>Predict</span></h1>
        <div className="space">

        </div>
        <div className="menu">
            <Link className='menuLink' activeClass="active" to="upload" spy={true} smooth={true} duration={500} offset={-110}>Predict</Link>
            <Link className='menuLink' activeClass="active" to="desc" spy={true} smooth={true} duration={500} offset={-130}>Description</Link>
            <Link className='menuLink' activeClass="active" to="metrics" spy={true} smooth={true} duration={500} offset={-70}>Metrics</Link>
        </div>
      </nav>
  )
}

export default Navbar
